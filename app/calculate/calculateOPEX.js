import { getFuturePrice } from "./utils.js";

const calculateOPEXPerYear = (year, data) => {
  const currentBenzinpreis = getFuturePrice(
    data.benzinpreis,
    data.ölpreisentwicklung,
    year,
  );
  const currentStromkostenHaushalt = getFuturePrice(
    data.stromkostenHaushalt,
    data.stromkostenHaushaltWicklung,
    year,
  );
  const currentStrommarktpreise = getFuturePrice(
    data.strommarktpreise,
    data.strommarktpreiseWicklung,
    year,
  );

  const totalKm = (data.kmProWoche * 365) / 7;
  const stromKm = totalKm * data.stromabdeckung;
  const stromHaushaltKm = stromKm * data.stromabdeckungHaushalt;
  const strommarktKm = stromKm - stromHaushaltKm;
  const benzinKm = totalKm - stromKm;

  const stromHaushaltCost =
    ((stromKm / 100) * data.stromverbrauch) *
    currentStromkostenHaushalt /
    (1 - data.ladeverluste);
  const strommarktCost =
    ((strommarktKm / 100) * data.stromverbrauch) *
    currentStrommarktpreise /
    (1 - data.ladeverluste);
  const benzinCost =
    ((benzinKm / 100) * data.kraftstoffverbrauch) * currentBenzinpreis;

  let OPEX = stromHaushaltCost + strommarktCost + benzinCost;

  const currentJährlicheWartungskosten = getFuturePrice(
    data.jährlicheWartungskosten,
    data.zinsrate,
    year,
  );

  const currentVersicherungskosten = getFuturePrice(
    data.jährlicheWartungskosten,
    data.zinsrate,
    year,
  );
  OPEX = OPEX + currentJährlicheWartungskosten + currentVersicherungskosten;

  return OPEX;
};

const calculateOPEXPer = (data) => {
  let OPEX = 0;
  for (let i = 0; i < data.jahr; i++) {
    OPEX = OPEX + calculateOPEXPerYear(i, data);
  }

  return OPEX;
};

export default calculateOPEXPer;
