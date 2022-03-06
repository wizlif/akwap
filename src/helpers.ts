import stringSimilarity = require('string-similarity');
import { _districtsHashMap } from '.';
import { District, BaseCounty, Base, BaseSubCounty, BaseParish, BaseVillage } from './types';
import { toCamelCase } from './utils/utils';

export function getDistrict(district: string): District {
  district = district.toLowerCase();
  if (district.includes('-')) {
    district = toCamelCase(district);
  }

  const ds = _districtsHashMap[district];

  if (ds) {
    return ds;
  } else {
    throw new Error('No such district');
  }
}

export function getCounty(county: string, accuracy: number = 0.5): BaseCounty[] {
  const counties = Object.entries(_districtsHashMap).map(([name, district]) => {
    const _district: Base = {
      id: district.id,
      name: district.name,
    };

    return district.counties
      .filter((ds) => {
        const score = stringSimilarity.compareTwoStrings(ds.name.toLowerCase(), county.toLowerCase());
        return score > accuracy;
      })
      .map((ds) => {
        return {
          id: ds.id,
          name: ds.name,
          district: _district,
        } as BaseCounty;
      });
  });

  return counties.reduce((accumulator, value) => accumulator.concat(value), []);
}

export function getSubCounty(subcounty: string, accuracy: number = 0.5): BaseSubCounty[] {
  const counties = Object.entries(_districtsHashMap).map(([name, district]) => {
    const _district: Base = {
      id: district.id,
      name: district.name,
    };

    return district.counties
      .map((cs) => {
        const _county: Base = {
          id: cs.id,
          name: cs.name,
        };

        return cs.sub_counties
          .filter((es) => {
            const score = stringSimilarity.compareTwoStrings(es.name.toLowerCase(), subcounty.toLowerCase());
            return score > accuracy;
          })
          .map((es) => {
            return {
              id: es.id,
              name: es.name,
              district: _district,
              county: _county,
            } as BaseSubCounty;
          });
      })
      .reduce((accumulator, value) => accumulator.concat(value), []);
  });

  return counties.reduce((accumulator, value) => accumulator.concat(value), []);
}

export function getParish(parish: string, accuracy: number = 0.5): BaseParish[] {
  const counties = Object.entries(_districtsHashMap).map(([name, district]) => {
    const _district: Base = {
      id: district.id,
      name: district.name,
    };

    return district.counties
      .map((cs) => {
        const _county: Base = {
          id: cs.id,
          name: cs.name,
        };

        return cs.sub_counties
          .map((gs) => {
            const _subcounty: Base = {
              id: cs.id,
              name: cs.name,
            };

            return gs.parishes
              .filter((es) => {
                const score = stringSimilarity.compareTwoStrings(es.name.toLowerCase(), parish.toLowerCase());
                return score > accuracy;
              })
              .map((es) => {
                return {
                  id: es.id,
                  name: es.name,
                  district: _district,
                  county: _county,
                  sub_county: _subcounty,
                } as BaseParish;
              });
          })
          .reduce((accumulator, value) => accumulator.concat(value), []);
      })
      .reduce((accumulator, value) => accumulator.concat(value), []);
  });

  return counties.reduce((accumulator, value) => accumulator.concat(value), []);
}

export function getVillage(village: string, accuracy: number = 0.5): BaseVillage[] {
  const counties = Object.entries(_districtsHashMap).map(([name, district]) => {
    const _district: Base = {
      id: district.id,
      name: district.name,
    };

    return district.counties
      .map((cs) => {
        const _county: Base = {
          id: cs.id,
          name: cs.name,
        };

        return cs.sub_counties
          .map((gs) => {
            const _subcounty: Base = {
              id: cs.id,
              name: cs.name,
            };

            return gs.parishes
              .map((ks) => {
                const _parish: Base = {
                  id: ks.id,
                  name: ks.name,
                };

                return ks.villages
                  .filter((es) => {
                    const score = stringSimilarity.compareTwoStrings(es.name.toLowerCase(), village.toLowerCase());
                    return score > accuracy;
                  })
                  .map((es) => {
                    return {
                      id: es.id,
                      name: es.name,
                      district: _district,
                      county: _county,
                      sub_county: _subcounty,
                      parish: _parish,
                    } as BaseVillage;
                  });
              })
              .reduce((accumulator, value) => accumulator.concat(value), []);
          })
          .reduce((accumulator, value) => accumulator.concat(value), []);
      })
      .reduce((accumulator, value) => accumulator.concat(value), []);
  });

  return counties.reduce((accumulator, value) => accumulator.concat(value), []);
}
