/* eslint-disable jsx-a11y/alt-text */
import { SWITCH_COLIMNS } from '../_action/type'

const initialState = {
  columns: ['Name', 'Tag Line', 'ABV', 'IBU', 'SRM'],
}

export default function table_reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_COLIMNS: {
      console.log(action.payload)
      return { ...state, columns: [...action.payload] }
    }

    default:
      return state
  }
}
