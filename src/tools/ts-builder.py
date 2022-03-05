import json


district = 'ABIM'
dos_data = json.loads(
    open(f'../districts/scrape/{district}.json', 'r').read())

ts_district = f'''
export default <District>{{
  name: '{dos_data['name']}',
  id: {dos_data['id']},
  counties: [{','.join([str(dt['id']) for dt in dos_data['counties']])}],
}};'''

# print(ts_district)
_counties = []
_sub_counties = {}
_parishes = []
_villages = []

for county in dos_data['counties']:
    _counties.append(f'''{{
        name: '{county['name']}',
        id: {county['id']},
        sub_counties: [{','.join([str(dt['id']) for dt in county['sub_counties']])}]
    }}''')

    _sub_counties[county['id']] = []
    for dt in county['sub_counties']:
        _sub_counties[county['id']].append(f'''
        {{
            name: {dt['name']},
            id: {dt['id']},
            parishes: [{','.join([str(dr['id']) for dr in dt['parishes']])}]
        }}
        ''')

        _parishes[dt['id']] = []
        for dr in dt['parishes']:
            _parishes[dt['id']].append(f'''
            {{
                name: {dr['name']},
                id: {dr['id']},
                villages: [{','.join(str(df['id'] for df in dr['villages']))}]
            }}
            ''')

            # _villages[]

ts_counties = f'''
export const counties: County[] = [{','.join(_counties)}];'''

_ts_sb = f'''{ {f"{sc}:[{','.join(_sub_counties[sc])}]" for sc in _sub_counties}}'''
ts_sub_counties = f'''
export const subCounties: {{ [county: int]: SubCounty[] }} = {_ts_sb}
'''

# print(_ts_sb)
print(ts_sub_counties)
