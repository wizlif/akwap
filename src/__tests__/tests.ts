import { getCounty, getDistrict, getParish, getSubCounty, getVillage } from '../helpers';
const stringSimilarity = require('string-similarity');

it('loads selected district', () => {
  const district = getDistrict('ABIM');
  expect(district.id).toEqual(98);
  expect(district.name).toEqual('ABIM');
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
  expect(parishes.length).toEqual(33);
});

it('gives list of villages on `getVillage`', () => {
  const villages = getVillage('KAMULI', 0.8);
  console.log(villages);
  expect(villages.length).toEqual(31);
});
