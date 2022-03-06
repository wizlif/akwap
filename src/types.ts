export type District = {
  /**
   * District name
   */
  name: string;
  /**
   * District id
   */
  id: number;
  /**
   * District counties
   */
  counties: County[];
};

export type County = {
  /**
   * County name
   */
  name: string;
  /**
   * County id
   */
  id: number;
  /**
   * County sub counties
   */
  sub_counties: SubCounty[];
};

export type SubCounty = {
  /**
   * SubCounty name
   */
  name: string;
  /**
   * SubCounty id
   */
  id: number;
  /**
   * SubCounty parishes
   */
  parishes: Parish[];
};

export type Parish = {
  /**
   * Parish name
   */
  name: string;
  /**
   * Parish id
   */
  id: number;
  /**
   * Parish villages
   */
  villages: Village[];
};

export type Village = {
  /**
   * Village name
   */
  name: string;
  /**
   * Village id
   */
  id: number;
};

/**
 * Base Types without extra data
 */
export type BaseDistrict = {
  /**
   * District name
   */
  name: string;
  /**
   * District id
   */
  id: number;
};

export type BaseCounty = {
  /**
   * County name
   */
  name: string;
  /**
   * County id
   */
  id: number;

  /**
   * County district
   */
  district: BaseDistrict;
};

export type Base = {
  name: string;
  id: number;
};

export type BaseSubCounty = {
  /**
   * SubCounty name
   */
  name: string;
  /**
   * SubCounty id
   */
  id: number;

  /**
   * SubCounty county
   */
  county: Base;

  /**
   * SubCounty district
   */
  district: Base;
};

export type BaseParish = {
  /**
   * Parish name
   */
  name: string;
  /**
   * Parish id
   */
  id: number;

  /**
   * Parish sub county
   */
  sub_county: Base;

  /**
   * Parish county
   */
  county: Base;

  /**
   * Parish district
   */
  district: Base;
};

export type BaseVillage = {
  /**
   * Parish name
   */
  name: string;
  /**
   * Parish id
   */
  id: number;

  /**
   * Parish sub county
   */
  parish: Base;

  /**
   * Parish sub county
   */
  sub_county: Base;

  /**
   * Parish county
   */
  county: Base;

  /**
   * Parish district
   */
  district: Base;
};
