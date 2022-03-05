import { getDistrictInfo } from '../index';

it('loads selected district', async () => {
  const district = await getDistrictInfo('ABIM');
  expect(district.id).toEqual(98);
  expect(district.name).toEqual('ABIM');
});
