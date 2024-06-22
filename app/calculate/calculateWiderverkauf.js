import { getPresentValue } from "./utils.js";


const calculateWiderverkauf = (data) => {
  let totalKm = (data.kmProWoche * 365) / 7 * data.jahr
  let pricePerKm = (data.fahrzeugpreis - data.wiederverkaufswert) / data.LaufleistungBeimWiederverkauf

  let usedPrice = data.fahrzeugpreis - totalKm * pricePerKm

  console.log(1111, usedPrice)

  const wiederverkaufswertPV = usedPrice > 0 ?getPresentValue(
    usedPrice,
    data.zinsrate,
    data.jahr,
  ) : 0

  return wiederverkaufswertPV
}

export default calculateWiderverkauf