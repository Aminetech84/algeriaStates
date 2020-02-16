/**
 * <h5>رقم الولاية: 32</h5>
 * <h5>المساحة: البيض</h5>
 * <h5>عدد السكان: البيض</h5>
 * <h5>الرمز البريدي: البيض</h5>
 * <h5>رقم الهاتف: البيض</h5>
 * <h5>الولايات المنتدبة: البيض</h5>
 * <h5>الدوائر: البيض</h5>
 * <h5>البلديات: البيض</h5> 
 */

const elBayadh = [{
    name: "البيض",
    name_en: "El Bayadh",
    code: 32,
    area: 71697,
    population: "",
    postalCodes: "320XX",
    phoneCodes: "049XXXXXX"
  },
  {
    substates: [{
        name: "الأبيض سيدي الشيخ",
        name_en: "El Abiodh Sidi Cheikh",
        code: 32,
        area: 12152,
        population: "",
        postalCodes: "320XX",
        phoneCodes: "049XXXXXX"
      },
      {
        name: "22الأبيض سيدي الشيخ",
        name_en: "El Abiodh Sidi Cheikh",
        code: 32,
        area: 12152,
        population: "",
        postalCodes: "320XX",
        phoneCodes: "049XXXXXX"
      },
      {
        name: "33الأبيض سيدي الشيخ",
        name_en: "El Abiodh Sidi Cheikh",
        code: 32,
        area: 12152,
        population: "",
        postalCodes: "320XX",
        phoneCodes: "049XXXXXX"
      }
    ]
  },
  {
    dairats: [{
      name: "بريزينة",
      name_en: "Brezina",
      code: 32,
      area: 12152,
      population: "",
      postalCodes: "320XX",
      phoneCodes: "049XXXXXX",
      baladyiats: [{
        name: "الغاسول",
        name_en: "Ghassoul",
        code: 32,
        area: 12152,
        population: "",
        postalCodes: "320XX",
        phoneCodes: "049XXXXXX"
      }]
    }]
  }
];






//module.exports = state;
//module.exports = states;
module.exports = elBayadh;



// console.log(elBayadh[1].substates[0].name);



/* 
El Bayadh	1	El Bayadh
Rogassa	3	Cheguig • Kef El Ahmar • Rogassa
Brezina	3	Brezina • Kraakda • Ghassoul
El Abiodh Sidi Cheikh	4	Aïn El Orak • Arbaouat • El Abiodh Sidi Cheikh • El Bnoud
Bougtoub	3	Bougtoub • El Kheiter • Tousmouline
Chellala	2	Chellala • El Mehara
Boussemghoun	1	Boussemghoun
Boualem	5	Boualem • Sidi Ameur • Sidi Slimane • Sidi Tifour • Stitten

 */










/*
    
    {
      "code": 3202,
      "name": "ROGASSA",
      "name_ar": "رقاصة",
      "name_en": "ROGASSA",
      "baladyiats": [{
          "code": 3202,
          "name": "ROGASSA",
          "name_en": "ROGASSA",
          "name_ar": "رقاصة"
        },
        {
          "code": 3210,
          "name": "BOUGTOUB",
          "name_en": "BOUGTOUB",
          "name_ar": "بوقطب"
        },
        {
          "code": 3222,
          "name": "SIDI TIFFOUR",
          "name_en": "SIDI TIFFOUR",
          "name_ar": "سيدي طيفور"
        }
      ]
    },
    {
      "code": 3203,
      "name": "BREZINA",
      "name_ar": "بريزينة",
      "name_en": "BREZINA"
    },
    {
      "code": 3204,
      "name": "BOUALEM",
      "name_ar": "بوعلام",
      "name_en": "BOUALEM",
      "baladyiats": [{
          "code": 3204,
          "name": "BREZINA",
          "name_en": "BREZINA",
          "name_ar": "بريزينة"
        },
        {
          "code": 3209,
          "name": "ARBAOUAT",
          "name_en": "ARBAOUAT",
          "name_ar": "اربوات"
        },
        {
          "code": 3217,
          "name": "CHEGUIG",
          "name_en": "CHEGUIG",
          "name_ar": "الشقيق"
        }
      ]
    },
    {
      "code": 3205,
      "name": "LABIODH SIDI CHEIKH",
      "name_ar": "الأبيض سيدي الشيخ",
      "name_en": "LABIODH SIDI CHEIKH"
    },
    {
      "code": 3206,
      "name": "BOUGTOB",
      "name_ar": "بوقطب",
      "name_en": "BOUGTOB",
      "baladyiats": [{
          "code": 3205,
          "name": "GHASSOUL",
          "name_en": "GHASSOUL",
          "name_ar": "الغاسول"
        },
        {
          "code": 3211,
          "name": "EL KHEITHER",
          "name_en": "EL KHEITHER",
          "name_ar": "الخيثر"
        },
        {
          "code": 3212,
          "name": "KEF EL AHMAR",
          "name_en": "KEF EL AHMAR",
          "name_ar": "الكاف الأحمر"
        },
        {
          "code": 3214,
          "name": "CHELLALA",
          "name_en": "CHELLALA",
          "name_ar": "شلالة"
        },
        {
          "code": 3219,
          "name": "EL MEHARA",
          "name_en": "EL MEHARA",
          "name_ar": "المحرة"
        }
      ]
    },
    {
      "code": 3207,
      "name": "BOUSSEMGHOUN",
      "name_ar": "بوسمغون",
      "name_en": "BOUSSEMGHOUN",
      "baladyiats": [{
          "code": 3203,
          "name": "STITTEN",
          "name_en": "STITTEN",
          "name_ar": "ستيتن"
        },
        {
          "code": 3206,
          "name": "BOUALEM",
          "name_en": "BOUALEM",
          "name_ar": "بوعلام"
        },
        {
          "code": 3215,
          "name": "KRAKDA",
          "name_en": "KRAKDA",
          "name_ar": "كراكدة"
        },
        {
          "code": 3216,
          "name": "EL BNOUD",
          "name_en": "EL BNOUD",
          "name_ar": "البنود"
        }
      ]
    },
    {
      "code": 3208,
      "name": "CHELLALA",
      "name_ar": "شلالة",
      "name_en": "CHELLALA"
    }
  ],
  "adjacentWilayas": [
    1,
    8,
    45,
    22,
    20,
    14,
    3,
    47
  ]
}];




/*
  name: "El Bayadh",
  name_ar: "البيض",
  area: "",
  population: "",
  codePost: "32000",
  phoneCodes: "049",
  dairats: {
    code: "3201",
    name: "EL BAYADH",
    name_ar: "البيض",
    name_en: "EL BAYADH",
    baladyiats: {
      one: {
        code: "5"
      }
    }
  }, 
}];*/

//console.log(elBayadh.code);


/*
  [{  name: "EL BAYADH",
    name_ar: "البيض",
    name_en: "EL BAYADH",
    baladyiats: [{
      "code": 3201,
      "name": "EL BAYADH",
      "name_en": "EL BAYADH",
      "name_ar": "البيض"

    }]
  } , ]
}];*/





/*

const elBayadh = [{
  code: "32",
  name: "El Bayadh",
  name_ar: "البيض",
  area: "",
  population: "",
  codePost: "32000",
  phoneCodes: "049",
  dairats: [{
    code: "3201",
    name: "EL BAYADH",
    name_ar: "البيض",
    name_en: "EL BAYADH",
    baladyiats: [{
      "code": 3201,
      "name": "EL BAYADH",
      "name_en": "EL BAYADH",
      "name_ar": "البيض"

    }]
  }, ]
}];
*/

/*
"mattricule": 32,
    "name": "El Bayadh",
    "name_ar": "البيض",
    "name_en": "El Bayadh",
    "phoneCodes": [
      49
    ],
    "postalCodes": [
      32000,
      32001,
      32002,
      32003,
      32004,
      32005,
      32006,
      32007,
      32008,
      32009,
      32010,
      32011,
      32012,
      32013,
      32014,
      32015,
      32016,
      32017,
      32018,
      32019,
      32020,
      32021,
      32022,
      32023,
      32024,
      32025,
      32026,
      32027,
      32028,
      32029,
      32030,
      32031,
      32032,
      32033,
      32034,
      32035,
      32036,
      32037,
      32038,
      32039,
      32040,
      32041,
      32042
    ],
    "dairats": [
      {
        "code": 3201,
        "name": "EL BAYADH",
        "name_ar": "البيض",
        "name_en": "EL BAYADH",
        "baladyiats": [
          {
            "code": 3201,
            "name": "EL BAYADH",
            "name_en": "EL BAYADH",
            "name_ar": "البيض"
          }
        ]
      },
      {
        "code": 3202,
        "name": "ROGASSA",
        "name_ar": "رقاصة",
        "name_en": "ROGASSA",
        "baladyiats": [
          {
            "code": 3202,
            "name": "ROGASSA",
            "name_en": "ROGASSA",
            "name_ar": "رقاصة"
          },
          {
            "code": 3210,
            "name": "BOUGTOUB",
            "name_en": "BOUGTOUB",
            "name_ar": "بوقطب"
          },
          {
            "code": 3222,
            "name": "SIDI TIFFOUR",
            "name_en": "SIDI TIFFOUR",
            "name_ar": "سيدي طيفور"
          }
        ]
      },
      {
        "code": 3203,
        "name": "BREZINA",
        "name_ar": "بريزينة",
        "name_en": "BREZINA"
      },
      {
        "code": 3204,
        "name": "BOUALEM",
        "name_ar": "بوعلام",
        "name_en": "BOUALEM",
        "baladyiats": [
          {
            "code": 3204,
            "name": "BREZINA",
            "name_en": "BREZINA",
            "name_ar": "بريزينة"
          },
          {
            "code": 3209,
            "name": "ARBAOUAT",
            "name_en": "ARBAOUAT",
            "name_ar": "اربوات"
          },
          {
            "code": 3217,
            "name": "CHEGUIG",
            "name_en": "CHEGUIG",
            "name_ar": "الشقيق"
          }
        ]
      },
      {
        "code": 3205,
        "name": "LABIODH SIDI CHEIKH",
        "name_ar": "الأبيض سيدي الشيخ",
        "name_en": "LABIODH SIDI CHEIKH"
      },
      {
        "code": 3206,
        "name": "BOUGTOB",
        "name_ar": "بوقطب",
        "name_en": "BOUGTOB",
        "baladyiats": [
          {
            "code": 3205,
            "name": "GHASSOUL",
            "name_en": "GHASSOUL",
            "name_ar": "الغاسول"
          },
          {
            "code": 3211,
            "name": "EL KHEITHER",
            "name_en": "EL KHEITHER",
            "name_ar": "الخيثر"
          },
          {
            "code": 3212,
            "name": "KEF EL AHMAR",
            "name_en": "KEF EL AHMAR",
            "name_ar": "الكاف الأحمر"
          },
          {
            "code": 3214,
            "name": "CHELLALA",
            "name_en": "CHELLALA",
            "name_ar": "شلالة"
          },
          {
            "code": 3219,
            "name": "EL MEHARA",
            "name_en": "EL MEHARA",
            "name_ar": "المحرة"
          }
        ]
      },
      {
        "code": 3207,
        "name": "BOUSSEMGHOUN",
        "name_ar": "بوسمغون",
        "name_en": "BOUSSEMGHOUN",
        "baladyiats": [
          {
            "code": 3203,
            "name": "STITTEN",
            "name_en": "STITTEN",
            "name_ar": "ستيتن"
          },
          {
            "code": 3206,
            "name": "BOUALEM",
            "name_en": "BOUALEM",
            "name_ar": "بوعلام"
          },
          {
            "code": 3215,
            "name": "KRAKDA",
            "name_en": "KRAKDA",
            "name_ar": "كراكدة"
          },
          {
            "code": 3216,
            "name": "EL BNOUD",
            "name_en": "EL BNOUD",
            "name_ar": "البنود"
          }
        ]
      },
      {
        "code": 3208,
        "name": "CHELLALA",
        "name_ar": "شلالة",
        "name_en": "CHELLALA"
      }
    ],
    "adjacentWilayas": [
      1,
      8,
      45,
      22,
      20,
      14,
      3,
      47
    ]
  },
*/