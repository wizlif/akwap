import ABIM from './districts/abim';
import ADJUMANI from './districts/adjumani';
import AGAGO from './districts/agago';
import ALEBTONG from './districts/alebtong';
import AMOLATAR from './districts/amolatar';
import AMUDAT from './districts/amudat';
import AMURIA from './districts/amuria';
import AMURU from './districts/amuru';
import APAC from './districts/apac';
import ARUA from './districts/arua';
import BUDAKA from './districts/budaka';
import BUDUDA from './districts/bududa';
import BUGIRI from './districts/bugiri';
import BUGWERI from './districts/bugweri';
import BUHWEJU from './districts/buhweju';
import BUIKWE from './districts/buikwe';
import BUKEDEA from './districts/bukedea';
import BUKOMANSIMBI from './districts/bukomansimbi';
import BUKWO from './districts/bukwo';
import BULAMBULI from './districts/bulambuli';
import BULIISA from './districts/buliisa';
import BUNDIBUGYO from './districts/bundibugyo';
import BUNYANGABU from './districts/bunyangabu';
import BUSHENYI from './districts/bushenyi';
import BUSIA from './districts/busia';
import BUTALEJA from './districts/butaleja';
import BUTAMBALA from './districts/butambala';
import BUTEBO from './districts/butebo';
import BUVUMA from './districts/buvuma';
import BUYENDE from './districts/buyende';
import Districts from './districts/districts';
import DOKOLO from './districts/dokolo';
import GOMBA from './districts/gomba';
import GULU from './districts/gulu';
import HOIMA from './districts/hoima';
import IBANDA from './districts/ibanda';
import IGANGA from './districts/iganga';
import ISINGIRO from './districts/isingiro';
import JINJA from './districts/jinja';
import KAABONG from './districts/kaabong';
import KABALE from './districts/kabale';
import KABAROLE from './districts/kabarole';
import KABERAMAIDO from './districts/kaberamaido';
import KAGADI from './districts/kagadi';
import KAKUMIRO from './districts/kakumiro';
import KALAKI from './districts/kalaki';
import KALANGALA from './districts/kalangala';
import KALIRO from './districts/kaliro';
import KALUNGU from './districts/kalungu';
import KAMPALA from './districts/kampala';
import KAMULI from './districts/kamuli';
import KAMWENGE from './districts/kamwenge';
import KANUNGU from './districts/kanungu';
import KAPCHORWA from './districts/kapchorwa';
import KAPELEBYONG from './districts/kapelebyong';
import KARENGA from './districts/karenga';
import KASANDA from './districts/kasanda';
import KASESE from './districts/kasese';
import KATAKWI from './districts/katakwi';
import KAYUNGA from './districts/kayunga';
import KAZO from './districts/kazo';
import KIBAALE from './districts/kibaale';
import KIBOGA from './districts/kiboga';
import KIBUKU from './districts/kibuku';
import KIKUUBE from './districts/kikuube';
import KIRUHURA from './districts/kiruhura';
import KIRYANDONGO from './districts/kiryandongo';
import KISORO from './districts/kisoro';
import KITAGWENDA from './districts/kitagwenda';
import KITGUM from './districts/kitgum';
import KOBOKO from './districts/koboko';
import KOLE from './districts/kole';
import KOTIDO from './districts/kotido';
import KUMI from './districts/kumi';
import KWANIA from './districts/kwania';
import KWEEN from './districts/kween';
import KYANKWANZI from './districts/kyankwanzi';
import KYEGEGWA from './districts/kyegegwa';
import KYENJOJO from './districts/kyenjojo';
import KYOTERA from './districts/kyotera';
import LAMWO from './districts/lamwo';
import LIRA from './districts/lira';
import LUUKA from './districts/luuka';
import LUWEERO from './districts/luweero';
import LWENGO from './districts/lwengo';
import LYANTONDE from './districts/lyantonde';
import MADI_OKOLLO from './districts/madi-okollo';
import MANAFWA from './districts/manafwa';
import MARACHA from './districts/maracha';
import MASAKA from './districts/masaka';
import MASINDI from './districts/masindi';
import MAYUGE from './districts/mayuge';
import MBALE from './districts/mbale';
import MBARARA from './districts/mbarara';
import MITOOMA from './districts/mitooma';
import MITYANA from './districts/mityana';
import MOROTO from './districts/moroto';
import MOYO from './districts/moyo';
import MPIGI from './districts/mpigi';
import MUBENDE from './districts/mubende';
import MUKONO from './districts/mukono';
import NABILATUK from './districts/nabilatuk';
import NAKAPIRIPIRIT from './districts/nakapiripirit';
import NAKASEKE from './districts/nakaseke';
import NAKASONGOLA from './districts/nakasongola';
import NAMAYINGO from './districts/namayingo';
import NAMISINDWA from './districts/namisindwa';
import NAMUTUMBA from './districts/namutumba';
import NAPAK from './districts/napak';
import NEBBI from './districts/nebbi';
import NGORA from './districts/ngora';
import NTOROKO from './districts/ntoroko';
import NTUNGAMO from './districts/ntungamo';
import NWOYA from './districts/nwoya';
import OBONGI from './districts/obongi';
import OMORO from './districts/omoro';
import OTUKE from './districts/otuke';
import OYAM from './districts/oyam';
import PADER from './districts/pader';
import PAKWACH from './districts/pakwach';
import PALLISA from './districts/pallisa';
import RAKAI from './districts/rakai';
import RUBANDA from './districts/rubanda';
import RUBIRIZI from './districts/rubirizi';
import RUKIGA from './districts/rukiga';
import RUKUNGIRI from './districts/rukungiri';
import RWAMPARA from './districts/rwampara';
import SERERE from './districts/serere';
import SHEEMA from './districts/sheema';
import SIRONKO from './districts/sironko';
import SOROTI from './districts/soroti';
import SSEMBABULE from './districts/ssembabule';
import TORORO from './districts/tororo';
import WAKISO from './districts/wakiso';
import YUMBE from './districts/yumbe';
import ZOMBO from './districts/zombo';
import { toCamelCase } from './utils/utils';
import stringSimilarity = require('string-similarity');

// Types
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

export const districts = Districts;

export const abim = ABIM;
export const adjumani = ADJUMANI;
export const agago = AGAGO;
export const alebtong = ALEBTONG;
export const amolatar = AMOLATAR;
export const amudat = AMUDAT;
export const amuria = AMURIA;
export const amuru = AMURU;
export const apac = APAC;
export const arua = ARUA;
export const budaka = BUDAKA;
export const bududa = BUDUDA;
export const bugiri = BUGIRI;
export const bugweri = BUGWERI;
export const buhweju = BUHWEJU;
export const buikwe = BUIKWE;
export const bukedea = BUKEDEA;
export const bukomansimbi = BUKOMANSIMBI;
export const bukwo = BUKWO;
export const bulambuli = BULAMBULI;
export const buliisa = BULIISA;
export const bundibugyo = BUNDIBUGYO;
export const bunyangabu = BUNYANGABU;
export const bushenyi = BUSHENYI;
export const busia = BUSIA;
export const butaleja = BUTALEJA;
export const butambala = BUTAMBALA;
export const butebo = BUTEBO;
export const buvuma = BUVUMA;
export const buyende = BUYENDE;
export const dokolo = DOKOLO;
export const gomba = GOMBA;
export const gulu = GULU;
export const hoima = HOIMA;
export const ibanda = IBANDA;
export const iganga = IGANGA;
export const isingiro = ISINGIRO;
export const jinja = JINJA;
export const kaabong = KAABONG;
export const kabale = KABALE;
export const kabarole = KABAROLE;
export const kaberamaido = KABERAMAIDO;
export const kagadi = KAGADI;
export const kakumiro = KAKUMIRO;
export const kalaki = KALAKI;
export const kalangala = KALANGALA;
export const kaliro = KALIRO;
export const kalungu = KALUNGU;
export const kampala = KAMPALA;
export const kamuli = KAMULI;
export const kamwenge = KAMWENGE;
export const kanungu = KANUNGU;
export const kapchorwa = KAPCHORWA;
export const kapelebyong = KAPELEBYONG;
export const karenga = KARENGA;
export const kasanda = KASANDA;
export const kasese = KASESE;
export const katakwi = KATAKWI;
export const kayunga = KAYUNGA;
export const kazo = KAZO;
export const kibaale = KIBAALE;
export const kiboga = KIBOGA;
export const kibuku = KIBUKU;
export const kikuube = KIKUUBE;
export const kiruhura = KIRUHURA;
export const kiryandongo = KIRYANDONGO;
export const kisoro = KISORO;
export const kitagwenda = KITAGWENDA;
export const kitgum = KITGUM;
export const koboko = KOBOKO;
export const kole = KOLE;
export const kotido = KOTIDO;
export const kumi = KUMI;
export const kwania = KWANIA;
export const kween = KWEEN;
export const kyankwanzi = KYANKWANZI;
export const kyegegwa = KYEGEGWA;
export const kyenjojo = KYENJOJO;
export const kyotera = KYOTERA;
export const lamwo = LAMWO;
export const lira = LIRA;
export const luuka = LUUKA;
export const luweero = LUWEERO;
export const lwengo = LWENGO;
export const lyantonde = LYANTONDE;
export const madiOkollo = MADI_OKOLLO;
export const manafwa = MANAFWA;
export const maracha = MARACHA;
export const masaka = MASAKA;
export const masindi = MASINDI;
export const mayuge = MAYUGE;
export const mbale = MBALE;
export const mbarara = MBARARA;
export const mitooma = MITOOMA;
export const mityana = MITYANA;
export const moroto = MOROTO;
export const moyo = MOYO;
export const mpigi = MPIGI;
export const mubende = MUBENDE;
export const mukono = MUKONO;
export const nabilatuk = NABILATUK;
export const nakapiripirit = NAKAPIRIPIRIT;
export const nakaseke = NAKASEKE;
export const nakasongola = NAKASONGOLA;
export const namayingo = NAMAYINGO;
export const namisindwa = NAMISINDWA;
export const namutumba = NAMUTUMBA;
export const napak = NAPAK;
export const nebbi = NEBBI;
export const ngora = NGORA;
export const ntoroko = NTOROKO;
export const ntungamo = NTUNGAMO;
export const nwoya = NWOYA;
export const obongi = OBONGI;
export const omoro = OMORO;
export const otuke = OTUKE;
export const oyam = OYAM;
export const pader = PADER;
export const pakwach = PAKWACH;
export const pallisa = PALLISA;
export const rakai = RAKAI;
export const rubanda = RUBANDA;
export const rubirizi = RUBIRIZI;
export const rukiga = RUKIGA;
export const rukungiri = RUKUNGIRI;
export const rwampara = RWAMPARA;
export const serere = SERERE;
export const sheema = SHEEMA;
export const sironko = SIRONKO;
export const soroti = SOROTI;
export const ssembabule = SSEMBABULE;
export const tororo = TORORO;
export const wakiso = WAKISO;
export const yumbe = YUMBE;
export const zombo = ZOMBO;

const _districtsHashMap: { [name: string]: District } = {
  abim,
  adjumani,
  agago,
  alebtong,
  amolatar,
  amudat,
  amuria,
  amuru,
  apac,
  arua,
  budaka,
  bududa,
  bugiri,
  bugweri,
  buhweju,
  buikwe,
  bukedea,
  bukomansimbi,
  bukwo,
  bulambuli,
  buliisa,
  bundibugyo,
  bunyangabu,
  bushenyi,
  busia,
  butaleja,
  butambala,
  butebo,
  buvuma,
  buyende,
  dokolo,
  gomba,
  gulu,
  hoima,
  ibanda,
  iganga,
  isingiro,
  jinja,
  kaabong,
  kabale,
  kabarole,
  kaberamaido,
  kagadi,
  kakumiro,
  kalaki,
  kalangala,
  kaliro,
  kalungu,
  kampala,
  kamuli,
  kamwenge,
  kanungu,
  kapchorwa,
  kapelebyong,
  karenga,
  kasanda,
  kasese,
  katakwi,
  kayunga,
  kazo,
  kibaale,
  kiboga,
  kibuku,
  kikuube,
  kiruhura,
  kiryandongo,
  kisoro,
  kitagwenda,
  kitgum,
  koboko,
  kole,
  kotido,
  kumi,
  kwania,
  kween,
  kyankwanzi,
  kyegegwa,
  kyenjojo,
  kyotera,
  lamwo,
  lira,
  luuka,
  luweero,
  lwengo,
  lyantonde,
  madiOkollo,
  manafwa,
  maracha,
  masaka,
  masindi,
  mayuge,
  mbale,
  mbarara,
  mitooma,
  mityana,
  moroto,
  moyo,
  mpigi,
  mubende,
  mukono,
  nabilatuk,
  nakapiripirit,
  nakaseke,
  nakasongola,
  namayingo,
  namisindwa,
  namutumba,
  napak,
  nebbi,
  ngora,
  ntoroko,
  ntungamo,
  nwoya,
  obongi,
  omoro,
  otuke,
  oyam,
  pader,
  pakwach,
  pallisa,
  rakai,
  rubanda,
  rubirizi,
  rukiga,
  rukungiri,
  rwampara,
  serere,
  sheema,
  sironko,
  soroti,
  ssembabule,
  tororo,
  wakiso,
  yumbe,
  zombo,
};

/***
 * Helper methods
 */
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
              id: gs.id,
              name: gs.name,
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
              id: gs.id,
              name: gs.name,
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
