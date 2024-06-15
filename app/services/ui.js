import {atom} from 'jotai'
import {carsDataAtom} from './userData'

export const selectCarsIdAtom = atom([0, 0]);

export const currentEditIdCarAtom = atom(null);

export const isDemandMoreAtom = atom(false);

export const selectCarsAtom = atom(get => {
  const selectCarsId = get(selectCarsIdAtom)
  const carsData = get(carsDataAtom)
  return [carsData[selectCarsId[0]], carsData[selectCarsId[1]]]
})
