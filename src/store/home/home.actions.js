import * as types from "../redux/types"

export const increaseCount = () => {
  return {
    type: types.COUNTER,
  }
}
