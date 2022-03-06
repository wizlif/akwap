# akwap

An database of Uganda's districts, counties, sub-counties, parishes and villages, complete with full TypeScript declaration support.

## Installation

Install from the NPM registry with NPM itself, or with [Yarn](https://github.com/yarnpkg/yarn):

```sh
# NPM:
npm install akwap

# or Yarn:
yarn add akwap
```

## Importing

You can import the package with ES6-style imports, or through Node's require:

```js
//ES6-style import
import { districts } from 'akwap';

//Require
const districts = require('akwap').districts;
```

## Usage

The district export is an array of all districts with the name and id:

```js
import { districts } from 'akwap';

const abim = districts.find((c) => c.name === 'ABIM');

console.log(abim);
// {
//   id: 98,
//   name: 'ABIM'
// }
```

This package also contains helper methods to search for content. The search uses fuzzy search to get back results. Pass an `accuracy` value to change the accuracy of the fuzzy search, default is `.5` and maximum is `1`

## Get district

```js
import { getDistrict } from 'akwap/helper';

const district = getDistrict('ABIM');

console.log(district);
// {
//   id: 98,
//   name: 'ABIM'
// }
```

## Get county

```js
import { getCounty } from 'akwap/helper';

const counties = getCounty('ADJUMANI');

console.log(counties);
// [
//   {
//     id: 166,
//     name: 'ADJUMANI EAST COUNTY',
//     district: { id: 68, name: 'ADJUMANI' }
//   },
//   {
//     id: 165,
//     name: 'ADJUMANI WEST COUNTY',
//     district: { id: 68, name: 'ADJUMANI' }
//   }
// ]
```

## Get Subcounty

```js
import { getSubCounty } from 'akwap/helper';

const subCounties = getSubCounty('ARINYAPI');

console.log(subCounties);
// [
//   {
//     id: 1019,
//     name: 'ARINYAPI',
//     district: { id: 68, name: 'ADJUMANI' },
//     county: { id: 166, name: 'ADJUMANI EAST COUNTY' }
//   },
//   {
//     id: 2103,
//     name: 'PALORINYA',
//     district: { id: 136, name: 'OBONGI' },
//     county: { id: 301, name: 'OBONGI COUNTY' }
//   }
// ]
```

## Get parish

```js
import { getParish } from 'akwap/helper';

const parishes = getParish('KAMULI', 0.8);

console.log(parishes);
//  [
//       {
//         id: 1736,
//         name: 'KAMULI',
//         district: { id: 26, name: 'KAKUMIRO' },
//         county: { id: 59, name: 'BUGANGAIZI WEST COUNTY' },
//         sub_county: { id: 59, name: 'BUGANGAIZI WEST COUNTY' }
//       },
//       {
//         id: 9582,
//         name: 'KAMULI',
//         district: { id: 38, name: 'KASANDA' },
//         county: { id: 82, name: 'KASSANDA COUNTY NORTH' },
//         sub_county: { id: 82, name: 'KASSANDA COUNTY NORTH' }
//       },
//      ...
//     ]
```

## Get village

```js
import { getVillage } from 'akwap/helper';

const villages = getVillage('KAMULI', 0.8);

console.log(villages);
//    [
//       {
//         id: 39075,
//         name: 'AMULI',
//         district: { id: 85, name: 'AMOLATAR' },
//         county: { id: 212, name: 'KIOGA COUNTY' },
//         sub_county: { id: 212, name: 'KIOGA COUNTY' },
//         parish: { id: 6206, name: 'ODIAK' }
//       },
//       {
//         id: 50625,
//         name: 'KAMULI',
//         district: { id: 110, name: 'BUIKWE' },
//         county: { id: 264, name: 'BUIKWE COUNTY SOUTH' },
//         sub_county: { id: 264, name: 'BUIKWE COUNTY SOUTH' },
//         parish: { id: 8161, name: 'KIRINGO' }
//       },
//       {
//         id: 50358,
//         name: 'KAMULI A',
//         district: { id: 110, name: 'BUIKWE' },
//         county: { id: 262, name: 'NJERU MUNICIPALITY' },
//         sub_county: { id: 262, name: 'NJERU MUNICIPALITY' },
//         parish: { id: 8121, name: 'SSUNGA' }
//       },
//       ...
//    ]
```
