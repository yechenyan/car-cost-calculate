import { atom } from "jotai";
import calculate from "../calculate"
import {selectCarsIdAtom, currentEditIdCarAtom} from "./ui"
import { atomWithStorage } from 'jotai/utils'

export const defaultUserData = {
  nachfrageData: {
    zinsrate: 2,
    jahr: 10,
    kmProWoche: 200,
    benzinpreis: 1.83,
    ölpreisentwicklung: 3,
    stromkostenHaushalt: 0.4,
    stromkostenHaushaltWicklung: 1,
    strommarktpreise: 50,
    strommarktpreiseWicklung: 0.01,
    stromabdeckungHaushalt: 50,
  },
  cars: [
    {
      name: 'ID4',
      id: 0,
      stromabdeckung: 50,
      stromverbrauch: 20,
      kraftstoffverbrauch: 8,
      ladeverluste: 10,

      fahrzeugpreis: 30000,
      steuern: 3000,
      KFZZeichen: 3000,
      subventionen: 500,

      jährlicheWartungskosten: 100,
      versicherungskosten: 100,

      Batteriekapazität: 100,
      Batterieverluste: 3000,
      Batteriepreis: 10000,

      wiederverkaufswert: 10000,
      LaufleistungBeimWiederverkauf:  6000
    },
    {
      name: 'Tesla',
      id: 1,
      stromabdeckung: 50,
      stromverbrauch: 20,
      kraftstoffverbrauch: 8,
      ladeverluste: 10,

      fahrzeugpreis: 30000,
      steuern: 3000,
      KFZZeichen: 3000,
      subventionen: 500,

      jährlicheWartungskosten: 100,
      versicherungskosten: 100,
      Batteriepreis: 15000,

      Batteriekapazität: 100,
      Batterieverluste: 3000,

      Batteriekapazität: 100,
      Batterieverluste: 3000,
      Batteriepreis: 10000,

      wiederverkaufswert: 10000,
      LaufleistungBeimWiederverkauf:  6000
    },
  ],
}

export const userDataAtom = atomWithStorage('user-data',defaultUserData);
// export const userDataAtom = atom(defaultUserData)


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
  const cars = get(carsDataAtom)
  const car = cars.find(car => car.id === selectCarsId[0])
  
  const nachfrageData = {
    ...data.nachfrageData,
    zinsrate: data.nachfrageData.zinsrate / 100,
    ölpreisentwicklung: data.nachfrageData.ölpreisentwicklung / 100,
    stromkostenHaushaltWicklung: data.nachfrageData.stromkostenHaushaltWicklung /100,
    strommarktpreiseWicklung: data.nachfrageData.strommarktpreiseWicklung / 100,
    stromabdeckungHaushaltWicklung: data.nachfrageData.stromabdeckungHaushaltWicklung / 100,
    stromabdeckungHaushalt: data.nachfrageData.stromabdeckungHaushalt / 100
  }

  const currentCar =  {
    ...car,
    stromabdeckung:car?.stromabdeckung /100,
    ladeverluste: car?.ladeverluste /100
  }

  return calculate({
    ...nachfrageData,
    ...currentCar,
  })
})

export const car2calculateAtom = atom((get) => {
  const data = get(userDataAtom)
  const cars = get(carsDataAtom)
  const selectCarsId = get(selectCarsIdAtom)
  const car = cars.find(car => car.id === selectCarsId[1])

  const nachfrageData = {
    ...data.nachfrageData,
    zinsrate: data.nachfrageData.zinsrate / 100,
    ölpreisentwicklung: data.nachfrageData.ölpreisentwicklung / 100,
    stromkostenHaushaltWicklung: data.nachfrageData.stromkostenHaushaltWicklung /100,
    strommarktpreiseWicklung: data.nachfrageData.strommarktpreiseWicklung / 100,
    stromabdeckungHaushaltWicklung: data.nachfrageData.stromabdeckungHaushaltWicklung / 100,
    stromabdeckungHaushalt: data.nachfrageData.stromabdeckungHaushalt / 100
  }


  const currentCar =  {
    ...car,
    stromabdeckung:car.stromabdeckung /100,
    ladeverluste: car.ladeverluste /100
  }

  return calculate({
    ...nachfrageData,
    ...currentCar,
  })

  return calculate({
    ...data.nachfrageData,
    ...car,
  })
})