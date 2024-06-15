import { atom } from "jotai";
import calculate from "../calculate"
import {selectCarsIdAtom, currentEditIdCarAtom} from "./ui"

let carId = 0;

export const userDataAtom = atom({
  nachfrageData: {
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
  },
  cars: [
    {
      name: 'ID4',
      id: 0,
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
    },
    {
      name: 'Tesla',
      id: 1,
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
    },
  ],
});

export const currentCarAtom = atom((get)=> {
  const currentCarId = get(currentEditIdCarAtom)
  const userData = get(userDataAtom);
  const car = userData.cars.find(car => car.id === currentCarId)
  

  return car
}, (get, set, value) => {
  const currentCarId = get(currentEditIdCarAtom)
  const userData = get(userDataAtom);

  const carIndex = userData.cars.findIndex(car => car.id === currentCarId)

  set(userDataAtom, data => {
    const newCars = [
      ...data.cars.slice(0, carIndex),
      { ...data.cars[carIndex], ...value },
      ...data.cars.slice(carIndex + 1),
    ];

    const newData = {
      ...data,
      cars: newCars,
    };

    return newData;
  })
})

export const demandAtom = atom((get) => {
  const userData = get(userDataAtom);
  return userData.nachfrageData
}, (_, set, value) => {
  set(userDataAtom, data => {
    const newData = {
     ...data,
      nachfrageData: {
       ...data.nachfrageData,
       ...value,
      },
    };

    return newData;
  })
})

export const carsDataAtom = atom((get) => {
  const userData = get(userDataAtom);

  return userData.cars;
});

export const car1calculateAtom = atom((get) => {
  const data = get(userDataAtom)
  const selectCarsId = get(selectCarsIdAtom)

  return calculate({
    ...data.nachfrageData,
    ...data.cars[selectCarsId[0]],
  })
})

export const car2calculateAtom = atom((get) => {
  const data = get(userDataAtom)
  const selectCarsId = get(selectCarsIdAtom)

  return calculate({
    ...data.nachfrageData,
    ...data.cars[selectCarsId[1]],
  })
})