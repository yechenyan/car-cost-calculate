import {atom} from 'jotai'
import {carsDataAtom} from './userData'
import { atomWithStorage } from 'jotai/utils'

export const selectCarsIdAtom = atomWithStorage('select-cars', [0, 1]);

export const currentEditIdCarAtom = atom(null);

export const isDemandMoreAtom = atom(false);

export const selectCarsAtom = atom(get => {
  const selectCarsId = get(selectCarsIdAtom)
  const carsData = get(carsDataAtom)
  return [carsData[selectCarsId[0]], carsData[selectCarsId[1]]]
})
