export type DB = {
  oll: Alg[];
  pll: Alg[];
};

export type Alg = {
  key: string;
  alg: string;
  hasVideo?: boolean;
};

export const AlgsDB: DB = {
  oll: [
    { key: "oll01", alg: "F (R U R' U' ) F'" },
    { key: "oll02", alg: "f (R U R' U' ) f'" },
    { key: "oll03", alg: "[F (R U R' U' ) F'] [f (R U R' U' ) f']" },
    { key: "oll04", alg: "(R U R') U (R U2 R')" },
    { key: "oll05", alg: "(R' U' R) U' (R' U2 R)" },
    { key: "oll06", alg: "F (R U R' U') (R U R' U') (R U R' U') F'" },
    { key: "oll07", alg: "(R U2) (R2 U') (R2 U') (R2 U2 R)" },
    { key: "oll08", alg: "(R2 D) (R' U2) (R D') (R' U2 R')" },
    { key: "oll09", alg: "(r U R' U') (r' F R F')" },
    { key: "oll10", alg: "F' (r U R' U') (r' F R )" },
  ],
  pll: [
    { key: "pll01", alg: "x (R' U R' D2) (R U' R' D2) R2" },
    { key: "pll02", alg: "x' (R U' R D2) (R' U R D2) R2" },
    { key: "pll03", alg: "x (R D' R' U) (R D R' U') (R D R' U) (R D' R' U')" },
    { key: "pll04", alg: "M2 U M2 U M U2 M2 U2 M U2" },
    { key: "pll05", alg: "M2 U M2 U2 M2 U M2" },
    { key: "pll06", alg: "R U' (R U R U) R U' (R' U' R2)" },
    { key: "pll07", alg: "R2 U R U (R' U' R' U') R' U R'" },
    { key: "pll08", alg: "(R' U2) (R U) (R' U2) (L U' R U L')" },
    { key: "pll09", alg: "(R U2) (R' U') (R U2) (L' U R' U' L)" },
    { key: "pll10", alg: "z (U2 r' U2 r U2) x (U2 r U2 r' U2) R" },
    { key: "pll11", alg: "(R' U2) (R U2) (R' F R U R' U') (R' F' R2 U')" },
    { key: "pll12", alg: "(L U'2) (L' U'2) (L F' L' U' L U) (L F L'2 U)" },
    { key: "pll13", alg: "(R U') (R' U R2) y (R U R' U' F' d) (R2 F R F')" },
    { key: "pll14", alg: "y (R2 u' R) (U' R U) (R' u R2) y (R U' R')" },
    { key: "pll15", alg: "y (R2 u R') (U R' U') (R u' R2) y' (R' U R)" },
    { key: "pll16", alg: "(R' U' R) y (R2 u R') (U R U') (R u' R2)" },
    { key: "pll17", alg: "y2 (R U R') y' (R2 u' R) (U' R' U) (R' u R2)" },
    { key: "pll18", alg: "(L U' R' U) (L' U' L U') (R U L') (U2 R' U2 R)" },
    { key: "pll19", alg: "(R U' L U2) (R' U L') (R U' L U2) (R' U L') U'" },
    { key: "pll20", alg: "(R' U L' U2) (R U' L) (R' U L' U2) (R U' L) U" },
    { key: "pll21", alg: "R2 (U' R' U R U') z' y' L' (U' R U' R' U') L U" },
  ],
};
