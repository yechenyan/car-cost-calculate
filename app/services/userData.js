import { atom } from "jotai";
import calculate from "../calculate"
import {selectCarsIdAtom, currentEditIdCarAtom} from "./ui"
import { atomWithStorage } from 'jotai/utils'

export const defaultUserData =  {
  "nachfrageData": {
      "zinsrate": 2,
      "jahr": 22,
      "kmProWoche": 220,
      "benzinpreis": 1.83,
      "ölpreisentwicklung": 3,
      "stromkostenHaushalt": 0.2,
      "stromkostenHaushaltWicklung": 1,
      "strommarktpreise": 0.5,
      "strommarktpreiseWicklung": 1,
      "stromabdeckungHaushalt": 50
  },
  "cars": [
      {
          "name": "VW Golf",
          "id": 0,
          "stromabdeckung": 0,
          "stromverbrauch": 0,
          "kraftstoffverbrauch": 6,
          "ladeverluste": 0,
          "fahrzeugpreis": 25000,
          "steuern": 150,
          "KFZZeichen": 35,
          "subventionen": 0,
          "jährlicheWartungskosten": 400,
          "versicherungskosten": 700,
          "Batteriekapazität": 0,
          "Batterieverluste": 0,
          "Batteriepreis": 0,
          "wiederverkaufswert": 12500,
          "LaufleistungBeimWiederverkauf": 60000
      },
      {
          "name": "Tesla Y",
          "id": 1,
          "stromabdeckung": 100,
          "stromverbrauch": 17.5,
          "kraftstoffverbrauch": 17.5,
          "ladeverluste": 10,
          "fahrzeugpreis": 55000,
          "steuern": 0,
          "KFZZeichen": 35,
          "subventionen": 9000,
          "jährlicheWartungskosten": 400,
          "versicherungskosten": 1000,
          "Batteriepreis": 12500,
          "Batteriekapazität": 75,
          "Batterieverluste": 1750,
          "wiederverkaufswert": 40000,
          "LaufleistungBeimWiederverkauf": 70000
      },
      {
          "name": "VW e-Golf",
          "id": 101,
          "stromabdeckung": 100,
          "stromverbrauch": 14.5,
          "kraftstoffverbrauch": 14.5,
          "ladeverluste": 10,
          "fahrzeugpreis": 32900,
          "steuern": 0,
          "KFZZeichen": 35,
          "subventionen": 9000,
          "jährlicheWartungskosten": 250,
          "versicherungskosten": 600,
          "wiederverkaufswert": 17500,
          "Batteriekapazität": 35.8,
          "Batterieverluste": 1250,
          "Batteriepreis": 7000,
          "LaufleistungBeimWiederverkauf": 60000
      }
  ]
}




export const defaultUserData2 = {
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

// export const userDataAtom = atomWithStorage('user-data',defaultUserData);
export const userDataAtom = atom(defaultUserData)


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