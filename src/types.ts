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
