import { getPresentValue } from "./utils.js";

const calculateCost = (data) => {
  
  let cost =
    data.fahrzeugpreis + data.steuern + data.KFZZeichen + data.subventionen;

  const wiederverkaufswertPV = getPresentValue(
    data.wiederverkaufswert,
    data.zinsrate,
    data.jahr,
  );
  return cost - wiederverkaufswertPV;
};

export default calculateCost;
