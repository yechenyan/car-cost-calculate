import calculateCost from "./calculateCost";
import calculateOPEX from "./calculateOPEX";
import calculateBattery from "./calculateBattery"
import calculateWiderverkauf from "./calculateWiderverkauf"

const calculate = (data) => {
  const kosten = calculateCost(data);
  let OPEX = calculateOPEX(data);
  const battery = calculateBattery(data)
  const widerverkauf = calculateWiderverkauf(data)

  OPEX = OPEX + battery.batteryCost

  const total = kosten + OPEX - widerverkauf;
  const totalKm = ((data.kmProWoche * 365) / 7) * data.jahr;
  const per = total / totalKm;
  const perOPEX = OPEX / data.jahr;

  let type = 'Hybrid'

  if (data.stromabdeckung >= 100) {
    type = 'E-Auto'
  }  else if (data.stromabdeckung <= 0) {
    type = 'Benziner'
  }

  return {
    total: total.toFixed(0),
    kosten: kosten.toFixed(0),
    OPEX: perOPEX.toFixed(0),
    per: per.toFixed(2),
    perOPEX: perOPEX.toFixed(2),
    batteryStatus: (battery?.batteryStatus * 100).toFixed(1),
    widerverkauf: widerverkauf.toFixed(2),
    type
  };
};

export default calculate;
