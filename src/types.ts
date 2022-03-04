export type District = {
  name: string;
  counties: County[];
};

export type County = {
  name: string;
  id: number;
  sub_counties: SubCounty[];
};

export type SubCounty = {
  name: string;
  id: number;
  parishes: Parish[];
};

export type Parish = {
  name: string;
  id: number;
  villages: Village[];
};

export type Village = {
  name: string;
  id: number;
};
