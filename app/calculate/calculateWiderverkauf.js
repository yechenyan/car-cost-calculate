import { getPresentValue } from "./utils.js";


const calculateWiderverkauf = (data) => {
  let totalKm = (data.kmProWoche * 365) / 7 * data.jahr
  let pricePerKm = (data.fahrzeugpreis - data.wiederverkaufswert) / data.LaufleistungBeimWiederverkauf 

  let usedPrice = data.fahrzeugpreis - totalKm * pricePerKm

  usedPrice  = usedPrice > 0 ? usedPrice : data.fahrzeugpreis * 0.1

  const wiederverkaufswertPV = getPresentValue(
    usedPrice,
    data.zinsrate,
    data.jahr,
  ) 

  return wiederverkaufswertPV
}

export default calculateWiderverkauf