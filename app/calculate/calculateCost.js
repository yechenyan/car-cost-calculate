import { getPresentValue } from "./utils.js";

const calculateCost = (data) => {
  
  let cost =
    data.fahrzeugpreis + data.steuern + data.KFZZeichen + data.subventionen;



  let totalKm = (data.kmProWoche * 365) / 7 * data.jahr
  let pricePerKm = (data.fahrzeugpreis - data.wiederverkaufswert) / data.LaufleistungBeimWiederverkauf

  let usedPrice = data.fahrzeugpreis - totalKm * pricePerKm

  const wiederverkaufswertPV = usedPrice > 0 ?getPresentValue(
    usedPrice,
    data.zinsrate,
    data.jahr,
  ) : 0
  
  return cost - wiederverkaufswertPV;
};

export default calculateCost;
