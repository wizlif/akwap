import { County, District, Parish, SubCounty, Village } from '../types';

export const villages: { [parish: string]: Village[] } = {};

export const parishes: { [subCounty: string]: Parish[] } = {};

export const subCounties: { [county: string]: SubCounty[] } = {};

export const counties: County[] = [];

export const district: District = {
  name: '',
  counties,
};
