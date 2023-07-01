import json
from os import listdir
import dirtyjson


def clean_obj(dt: dict) -> dict:
    nObj = {}

    for key in dt:
        value = dt[key]
        if isinstance(value, str):
            nObj[key] = value.upper()
        elif isinstance(value, dict):
            nObj[key] = clean_obj(value)
        elif isinstance(value, list):
            nv = []
            for i in range(len(value)):
                av = value[i]
                if isinstance(av, dict):
                    nv.append(clean_obj(av))
                else:
                    nv.append(av)
            nObj[key] = nv
        else:
            nObj[key] = value
    return nObj


def sort_obj(dt: dict) -> dict:
    nObj = {}

    for key in dt:
        value = dt[key]

        if isinstance(value, dict):
            nObj[key] = sort_obj(value)
        elif isinstance(value, list):
            nv = []
            for i in range(len(value)):
                av = value[i]
                if isinstance(av, dict):
                    nv.append(sort_obj(av))
                else:
                    nv.append(av)

            if isinstance(nv[0], str):
                nv = sorted(nv)
            elif isinstance(nv[0], dict):
                nv = sorted(nv, key=lambda item: item['name'])
            nObj[key] = nv
        else:
            nObj[key] = value

    return nObj


def compress_obj(dt):
    if isinstance(dt, dict) and len(dt) == 2:
        return dt['name']

    nObj = {}

    for key in dt:
        value = dt[key]
        if key == 'id':
            continue
        elif isinstance(value, str):
            nObj[key] = value.upper()
        elif isinstance(value, dict):
            nObj[key] = compress_obj(value)
        elif isinstance(value, list):
            nv = []
            for i in range(len(value)):
                av = value[i]
                if isinstance(av, dict):
                    nv.append(compress_obj(av))
                else:
                    nv.append(av)
            nObj[key] = nv
        else:
            nObj[key] = value
    return nObj


districts = json.loads(open('src/tools/json/districts-ura.json', 'r').read())

# for dt in districts:
#     district = dt["name"]
#     dos_data = json.loads(
#         open(f'src/tools/json/{district}.json', 'r').read())

#     ndt = clean_obj(dos_data)

#     ts = f'''
#     import {{ District }} from '../index';

#     export default {json.dumps(ndt)} as District;
#     '''

#     open(f'src/tools/ts/{district.lower()}.ts', '+w').write(ts)
# for dt in districts:
#     district = dt["name"]
#     dos_data = json.loads(
#         open(f'src/tools/json/ura/orig/{district}.json', 'r').read())

#     ndt = clean_obj(dos_data)


#     open(f'src/tools/json/ura/{district.lower()}.json', '+w').write(json.dumps(ndt))
# for dt in districts:
#     district = dt["name"]
#     dos_data = json.loads(
#         open(f'src/tools/json/ura/cleaned/{district.lower()}.json', 'r').read())

#     ndt = compress_obj(dos_data)

#     open(f'src/tools/json/ura/compressed/new/{district.lower()}.json', '+w').write(json.dumps(ndt))
# for dt in sorted(listdir('src/districts')):
#     district = dt.split(".")[0]
#     print(district)
#     data = open(f'src/districts/{district.lower()}.ts', 'r').read().replace("as District;", "").replace(
#         "export default", "").replace("import { District } from '../index';", "").strip()

#     data = dirtyjson.loads(data)

#     ndt = clean_obj(data)

#     open(
#         f'src/tools/json/ura/orig/old/{district.lower()}.json', '+w').write(json.dumps(ndt))
# for dt in sorted(listdir('src/tools/json/ura/compressed/old')):
#     district = dt.split(".")[0]
#     print(district)
#     data = json.loads(
#         open(f'src/tools/json/ura/compressed/old/{district.lower()}.json', 'r').read())

#     ndt = sort_obj(data)

#     open(
#         f'src/tools/json/ura/sorted/old/{district.lower()}.json', '+w').write(json.dumps(ndt, indent=4, sort_keys=True))
# for dt in sorted(listdir('src/tools/json/ura/compressed/old')):
#     district = dt.split(".")[0]
#     print(district)
#     d = json.loads(
#         open(f'src/tools/json/ura/compressed/old/{district.lower()}.json', 'r').read())

#     # df = f'{district["name"]}.json'
#     print(f'>>>>> {district}')

#     # d = json.loads(open(df, 'r').read())

#     if len(d['counties']) == 0:
#         print(f'>>>> COUNTY: {district}')
#     for county in d['counties']:
#         if len(county['sub_counties']) == 0:
#             print(f'>>> SUBCOUNTY: {county["name"]}')

#         for sub_county in county['sub_counties']:
#             if len(sub_county['parishes']) == 0:
#                 print(f'>> PARISH: {sub_county["name"]}')


#             for parish in sub_county['parishes']:
#                 if len(parish['villages']) == 0:
#                     print(f'> VILLAGE: {parish["name"]}')

## 71251 Get largest id
id = -1
for dt in sorted(listdir('src/tools/json/ura/orig/old')):
    district = dt.split(".")[0]
    
    d = json.loads(
        open(f'src/tools/json/ura/orig/old/{district.lower()}.json', 'r').read())

    if d['id'] > id:
        id = d['id']
        print(id)
    for county in d['counties']:
        if county['id'] > id:
            id = county['id']
            print(id)
        for sub_county in county['sub_counties']:
            if sub_county['id'] > id:
                id = sub_county['id']
                print(id)


            for parish in sub_county['parishes']:
                if parish['id'] > id:
                    id = parish['id']
                    print(id)
                
                for village in parish['villages']:
                    if village['id'] > id:
                        id = village['id']
                        print(id)


