import json

disricts = json.loads(open('districts.json', 'r').read())

for district in disricts[3:]:
    district["counties"] = []
    open(f'{str(district["name"]).lower()}.json',
         'w+').write(json.dumps(district))
