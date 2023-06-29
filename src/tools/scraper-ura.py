from enum import Enum
import json
import logging
import os
from time import sleep
from selenium import webdriver
from selenium.common.exceptions import TimeoutException, NoSuchElementException, ElementNotInteractableException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.remote.webelement import WebElement

DELAY = 10


class URATinIds(Enum):
    APPLICANT_TYPE = 'form:applicantType'
    DISTRICT_SELECT = 'form:homeDistrict'
    COUNTY_SELECT = 'form:homeCounty'
    SUBCOUNTY_SELECT = 'form:homeSubcounty'
    PARISH_SELECT = 'form:homeParish'
    VILLAGE_SELECT = 'form:homeVillage'
    LOADER = "//div[@class='ui-widget-overlay ui-dialog-mask']"
# class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow ui-hidden-container" LOADER


class URALocations:
    browser: WebDriver = None
    link = 'https://services.ura.go.ug/tinApplication/faces/registerTINInstant.xhtml'
    delay = 10

    def __init__(self) -> None:

        self.option = webdriver.FirefoxOptions()

# Set the allow_native_xpath capability to True
        # self.option.add_experimental_option("prefs", {"profile.default_content_settings": {"xpath_provider": "1"}})

        # self.option.set_preference("browser.download.folderList", 2)
        # self.option.set_preference(
        #     "browser.download.manager.showWhenStarting", False)
        # self.option.set_preference(
        #     "browser.download.dir", os.path.abspath(self.download_folder))
        # self.option.set_preference(
        #     "browser.helperApps.neverAsk.saveToDisk", "application/octet-stream")
        # self.option.set_preference(
        #     "browser.helperApps.neverAsk.saveToDisk", "application/pdf")
        # self.option.set_preference("pdfjs.disabled", True)
        self.browser = webdriver.Firefox(options=self.option)
        
        
    
    def wait_loader_to_be_invisible(self):
        while True:
            try:
                WebDriverWait(self.browser, self.delay).until(
                    EC.invisibility_of_element((By.XPATH, URATinIds.LOADER.value)))
                break
            except TimeoutException:
                continue   


    def launch_page(self):

        self.browser.get(self.link)

        WebDriverWait(self.browser, self.delay).until(
            EC.element_to_be_clickable((By.ID, URATinIds.APPLICANT_TYPE.value)))
        self.wait_loader_to_be_invisible()

        self.browser.find_element(
            By.ID, URATinIds.APPLICANT_TYPE.value).click()
        self.wait_loader_to_be_invisible()

        # Read districts
        districts = json.loads(open('districts-ura.json', 'r').read())
        done = []
        data = []

        for district in districts:
            df = f'{district["name"]}.json'
            if os.path.isfile(df):
                continue

            self.wait_loader_to_be_invisible()
            WebDriverWait(self.browser, self.delay).until(
                EC.element_to_be_clickable((By.ID, URATinIds.DISTRICT_SELECT.value)))

            district_element = Select(self.browser.find_element(
                By.ID, URATinIds.DISTRICT_SELECT.value))
            district_element.select_by_value(str(district['id']))

            self.wait_loader_to_be_invisible()
            WebDriverWait(self.browser, self.delay).until(
                EC.element_to_be_clickable((By.ID, URATinIds.COUNTY_SELECT.value)))

            district_data = dict(district)
            # Parse counties
            counties = []
            for county_element in self.browser.find_element(By.ID, URATinIds.COUNTY_SELECT.value)\
                    .find_elements(By.TAG_NAME, "option")[1:]:
                county_id = int(county_element.get_attribute('value'))
                county_data = {
                    'name': county_element.text.strip(),
                    'id': county_id,
                }

                county_select = Select(self.browser.find_element(
                    By.ID, URATinIds.COUNTY_SELECT.value))
                county_select.select_by_value(str(county_id))
                self.wait_loader_to_be_invisible()
                WebDriverWait(self.browser, self.delay).until(
                    EC.element_to_be_clickable((By.ID, URATinIds.SUBCOUNTY_SELECT.value)))

                # Parse sub-counties
                sub_counties = []
                for sub_county_element in self.browser.find_element(By.ID, URATinIds.SUBCOUNTY_SELECT.value)\
                        .find_elements(By.TAG_NAME, "option")[1:]:
                    sub_county_id = int(
                        sub_county_element.get_attribute('value'))
                    sub_county_data = {
                        'name': sub_county_element.text.strip(),
                        'id': sub_county_id,
                    }

                    sub_county_select = Select(self.browser.find_element(
                        By.ID, URATinIds.SUBCOUNTY_SELECT.value))
                    sub_county_select.select_by_value(str(sub_county_id))
                    self.wait_loader_to_be_invisible()
                    WebDriverWait(self.browser, self.delay).until(
                        EC.element_to_be_clickable((By.ID, URATinIds.PARISH_SELECT.value)))

                    # Parse parishes
                    parishes = []
                    for parish_element in self.browser.find_element(By.ID, URATinIds.PARISH_SELECT.value)\
                            .find_elements(By.TAG_NAME, "option")[1:]:
                        parish_id = int(parish_element.get_attribute('value'))
                        parish_data = {
                            'name': parish_element.text.strip(),
                            'id': parish_id,
                        }

                        parish_select = Select(self.browser.find_element(
                            By.ID, URATinIds.PARISH_SELECT.value))
                        parish_select.select_by_value(str(parish_id))
                        self.wait_loader_to_be_invisible()
                        WebDriverWait(self.browser, self.delay).until(
                            EC.element_to_be_clickable((By.ID, URATinIds.VILLAGE_SELECT.value)))

                        # Parse villages
                        villages = []
                        for village_element in self.browser.find_element(By.ID, URATinIds.VILLAGE_SELECT.value)\
                                .find_elements(By.TAG_NAME, "option")[1:]:
                            village_id = int(village_element.get_attribute('value'))
                            village_data = {
                                'name': village_element.text.strip(),
                                'id': village_id,
                            }

                            villages.append(village_data)

                        parish_data['villages'] = villages
                        parishes.append(parish_data)
                        # End villages parse

                    sub_county_data['parishes'] = parishes
                    sub_counties.append(sub_county_data)
                    # End parishes parse

                county_data['sub_counties'] = sub_counties
                counties.append(county_data)
                # End sub-county parse

            district_data['counties'] = counties
            data.append(district_data)
            open(df,'+w').write(json.dumps(district_data))

        # open('districts.json', 'w+').write(json.dumps(data, sort_keys=True, indent=4))

    def find_empty_data(self):
        districts = json.loads(open('districts-ura.json', 'r').read())

        for district in districts:
            df = f'{district["name"]}.json'
            print(f'>>>>> {district["name"]}')

            d = json.loads(open(df, 'r').read())

            if len(d['counties']) == 0:
                print(f'>>>> COUNTY: {district["name"]}')
            for county in d['counties']:
                if len(county['sub_counties']) == 0:
                    print(f'>>> SUBCOUNTY: {county["name"]}')

                for sub_county in county['sub_counties']:
                    if len(sub_county['parishes']) == 0:
                        print(f'>> PARISH: {sub_county["name"]}')


                    for parish in sub_county['parishes']:
                        if len(parish['villages']) == 0:
                            print(f'> VILLAGE: {parish["name"]}')


u = URALocations()

try:
    u.find_empty_data()
except:
    logging.exception('')
finally:
    pass
    # u.browser.quit()
