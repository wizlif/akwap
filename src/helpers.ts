import stringSimilarity = require('string-similarity');
import { _districtsHashMap } from '.';
import { District, BaseCounty, Base, BaseSubCounty, BaseParish, BaseVillage } from './types';

export function getDistrict(district: string): District {
  const ds = _districtsHashMap[district.replace('-', '_').toLowerCase()];

  if (ds) {
    return ds;
  } else {
    throw 'No such district';
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
      .map(
        (ds) =>
          <BaseCounty>{
            id: ds.id,
            name: ds.name,
            district: _district,
          },
      );
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
          .map(
            (es) =>
              <BaseSubCounty>{
                id: es.id,
                name: es.name,
                district: _district,
                county: _county,
              },
          );
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
              .map(
                (es) =>
                  <BaseParish>{
                    id: es.id,
                    name: es.name,
                    district: _district,
                    county: _county,
                    sub_county: _subcounty,
                  },
              );
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
                  .map(
                    (es) =>
                      <BaseVillage>{
                        id: es.id,
                        name: es.name,
                        district: _district,
                        county: _county,
                        sub_county: _subcounty,
                        parish: _parish,
                      },
                  );
              })
              .reduce((accumulator, value) => accumulator.concat(value), []);
          })
          .reduce((accumulator, value) => accumulator.concat(value), []);
      })
      .reduce((accumulator, value) => accumulator.concat(value), []);
  });

  return counties.reduce((accumulator, value) => accumulator.concat(value), []);
}
