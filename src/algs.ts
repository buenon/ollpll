export type DB = {
  oll: Alg[];
  pll: Alg[];
};

export type Alg = {
  id: string;
  alg: string;
  hasVideo?: boolean;
};

export const AlgsDB: DB = {
  oll: [
    { id: 'oll01', alg: "F (R U R' U' ) F'" },
    { id: 'oll02', alg: "f (R U R' U' ) f'" },
    { id: 'oll03', alg: "[F (R U R' U' ) F'] [f (R U R' U' ) f']" },
    { id: 'oll04', alg: "(R U R') U (R U2 R')" },
    { id: 'oll05', alg: "(R' U' R) U' (R' U2 R)" },
    { id: 'oll06', alg: "F (R U R' U') (R U R' U') (R U R' U') F'" },
    { id: 'oll07', alg: "(R U2) (R2 U') (R2 U') (R2 U2 R)" },
    { id: 'oll08', alg: "(R2 D) (R' U2) (R D') (R' U2 R')" },
    { id: 'oll09', alg: "(r U R' U') (r' F R F')" },
    { id: 'oll10', alg: "F' (r U R' U') (r' F R )" },
  ],
  pll: [
    { id: 'pll01', alg: "x (R' U R' D2) (R U' R' D2) R2" },
    { id: 'pll02', alg: "x' (R U' R D2) (R' U R D2) R2" },
    { id: 'pll03', alg: "x (R D' R' U) (R D R' U') (R D R' U) (R D' R' U')" },
    { id: 'pll04', alg: 'M2 U M2 U M U2 M2 U2 M U2' },
    { id: 'pll05', alg: 'M2 U M2 U2 M2 U M2' },
    { id: 'pll06', alg: "R U' (R U R U) R U' (R' U' R2)" },
    { id: 'pll07', alg: "R2 U R U (R' U' R' U') R' U R'" },
    { id: 'pll08', alg: "(R' U2) (R U) (R' U2) (L U' R U L')" },
    { id: 'pll09', alg: "(R U2) (R' U') (R U2) (L' U R' U' L)" },
    { id: 'pll10', alg: "z (U2 r' U2 r U2) x (U2 r U2 r' U2) R" },
    { id: 'pll11', alg: "(R' U2) (R U2) (R' F R U R' U') (R' F' R2 U')" },
    { id: 'pll12', alg: "(L U'2) (L' U'2) (L F' L' U' L U) (L F L'2 U)" },
    { id: 'pll13', alg: "(R U') (R' U R2) y (R U R' U' F' d) (R2 F R F')" },
    { id: 'pll14', alg: "y (R2 u' R) (U' R U) (R' u R2) y (R U' R')" },
    { id: 'pll15', alg: "y (R2 u R') (U R' U') (R u' R2) y' (R' U R)" },
    { id: 'pll16', alg: "(R' U' R) y (R2 u R') (U R U') (R u' R2)" },
    { id: 'pll17', alg: "y2 (R U R') y' (R2 u' R) (U' R' U) (R' u R2)" },
    { id: 'pll18', alg: "(L U' R' U) (L' U' L U') (R U L') (U2 R' U2 R)" },
    { id: 'pll19', alg: "(R U' L U2) (R' U L') (R U' L U2) (R' U L') U'" },
    { id: 'pll20', alg: "(R' U L' U2) (R U' L) (R' U L' U2) (R U' L) U" },
    { id: 'pll21', alg: "R2 (U' R' U R U') z' y' L' (U' R U' R' U') L U" },
  ],
};
