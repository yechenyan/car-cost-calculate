import calculateCost from "./calculateCost";
import calculateOPEX from "./calculateOPEX";
import getData from "./getData";

const calculate = (data) => {

  const kosten = calculateCost(data);
  const OPEX = calculateOPEX(data);
  const total = kosten + OPEX;
  const totalKm = ((data.kmProWoche * 365) / 7) * data.jahr;
  const per = total / totalKm;
  const perOPEX = OPEX / data.jahr;

  let type = 'Hybrid'

  if (data.stromabdeckung >= 1) {
    type = 'E-Auto'
  }  else if (data.stromabdeckung <= 0) {
    type = 'Benziner'
  }

  return {
    total: total.toFixed(2),
    kosten: kosten.toFixed(2),
    OPEX: perOPEX.toFixed(2),
    per: per.toFixed(2),
    perOPEX: perOPEX.toFixed(2),
    type
  };
};

export default calculate;
