import * as types from "../redux/types"
const initialState = {
  count: 0,
}

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case types.COUNTER: {
      const newCount = state.count + 1
      return {
        ...state,
        count: newCount,
      }
    }
    default:
      return state
  }
}

export default reducer
