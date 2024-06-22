
const calculateCost = (data) => {
  
  let cost =
    data.fahrzeugpreis + data.steuern + data.KFZZeichen + data.subventionen;
  
  return cost;
};

export default calculateCost;
