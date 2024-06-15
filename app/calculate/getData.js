const getData = () => {
  const nachfrageData = {
    zinsrate: 0.02,
    jahr: 10,
    kmProWoche: 200,
    benzinpreis: 1.83,
    ölpreisentwicklung: 0.03,
    stromkostenHaushalt: 0.4,
    stromkostenHaushaltWicklung: 0.01,
    strommarktpreise: 0.5,
    strommarktpreiseWicklung: 0.01,
    stromabdeckungHaushalt: 0.5,
  };

  const car = {
    stromabdeckung: 0.5,
    stromverbrauch: 20,
    kraftstoffverbrauch: 8,
    ladeverluste: 0.1,

    fahrzeugpreis: 30000,
    steuern: 3000,
    KFZZeichen: 3000,
    subventionen: -500,

    jährlicheWartungskosten: 100,
    versicherungskosten: 100,

    wiederverkaufswert: 10000,
  };

  return {
    ...nachfrageData,
    ...car,
  };
};

export default getData;
