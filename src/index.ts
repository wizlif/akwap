import Districts from './districts/districts';
import { District } from './types';
export const districts = Districts;

async function importDistrict(districtName: string): Promise<District> {
  return (await import(`./districts/${districtName}`))['default'];
}

export async function getDistrictInfo(district: string): Promise<District> {
  const ds = districts.find((ds) => ds.name.toLowerCase() === district.toLowerCase());

  if (ds) {
    return await importDistrict(ds.name.toLowerCase());
  } else {
    throw 'No such district';
  }
}
