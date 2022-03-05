import json
from time import sleep
from unicodedata import name
from bs4 import BeautifulSoup
import requests
from urllib import parse, request


URL = 'https://passports.go.ug/ajax/'
DELAY = 10


def get_counties(district: str) -> dict:
    url = f'{URL}load-counties/?district={district}'
    data = requests.get(url, verify=False)
    soup = BeautifulSoup(data.text, "html.parser")

    return [{"id": int(option['value']), "name":option.text}
            for option in soup.find_all('option')[1:]]


def get_sub_counties(county: str) -> dict:
    data = requests.get(
        f'{URL}load-subcounties/?county={county}', verify=False)
    soup = BeautifulSoup(data.text, "html.parser")

    return [{"id": int(option['value']), "name":option.text}
            for option in soup.find_all('option')[1:]]


def get_parishes(sub_county: str) -> dict:
    data = requests.get(
        f'{URL}load-parishes/?subcounty={sub_county}', verify=False)
    soup = BeautifulSoup(data.text, "html.parser")

    return [{"id": int(option['value']), "name":option.text}
            for option in soup.find_all('option')[1:]]


def get_villages(parish: str) -> dict:
    data = requests.get(f'{URL}load-villages/?parish={parish}', verify=False)
    soup = BeautifulSoup(data.text, "html.parser")

    return [{"id": int(option['value']), "name":option.text}
            for option in soup.find_all('option')[1:]]


for district in json.loads(open('districts.json', 'r').read()):
    _district = district

    _district['counties'] = []

    print(f'DISTRICT: Loading {district["name"]} ...')
    sleep(DELAY)

    for county in get_counties(district['id']):
        print(f'COUNTY: Loading {county["name"]} ...')
        sleep(DELAY)
        _county = county
        _county['sub_counties'] = []

        for sub_county in get_sub_counties(county['id']):
            print(f'SUBCOUNTY: Loading {sub_county["name"]} ...')
            sleep(DELAY)
            _sub_county = sub_county
            _sub_county['parishes'] = []

            for parish in get_parishes(sub_county['id']):
                print(f'PARISH: Loading {parish["name"]} ...')
                sleep(DELAY)
                _parish = parish

                _parish['villages'] = get_villages(parish['id'])

                _sub_county['parishes'].append(_parish)

            _county['sub_counties'].append(_sub_county)

        _district['counties'].append(_county)

    open(f'{district["name"]}.json', 'w+').write(json.dumps(_district))
