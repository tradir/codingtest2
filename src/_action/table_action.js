import { SWITCH_COLIMNS } from './type'

export const switchColumns = (array) => {
  return {
    type: SWITCH_COLIMNS,
    payload: array,
  }
}
