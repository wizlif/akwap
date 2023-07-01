import { getCounty, getDistrict, getParish, getSubCounty, getVillage, getVillageFromSubCounty } from '../src/index';
const stringSimilarity = require('string-similarity');

it('loads selected district', () => {
  const district = getDistrict('ABIM');
  expect(district.id).toEqual(98);
  expect(district.name).toEqual('ABIM');
});

it('[camel caser] still loads selected district', () => {
  const district = getDistrict('MADI-OKOLLO');
  expect(district.id).toEqual(134);
  expect(district.name).toEqual('MADI-OKOLLO');
});

it('gives list of counties on `getCounty`', () => {
  const counties = getCounty('ADJUMANI');
  expect(counties.length).toEqual(2);
});

it('gives list of sub-counties on `getCounty`', () => {
  const sub_counties = getSubCounty('ARINYAPI');
  expect(sub_counties.length).toEqual(2);
});

it('gives list of parishes on `getParish`', () => {
  const parishes = getParish('KAMULI', 0.8);
  expect(parishes.length).toEqual(5);
});

it('gives list of villages on `getVillage`', () => {
  const villages = getVillage('KAMULI', 0.8);
  expect(villages.length).toEqual(31);
});

it('gives list of villages on `getVillageFromSubCounty`', () => {
  const villages = getVillageFromSubCounty(
    {
      sub_county: 'BUKIGAI',
      parish: 'MBELEMA',
      village: 'ETUMBU',
    },
    0.8,
  );
  expect(villages.length).toEqual(1);
});
