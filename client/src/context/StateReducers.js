import { reducerCases } from "./constants";

export const initialState = {
  isMoreOpen: false,
  isChatOpened: false,
  isTypeSetting: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.IS_MORE_OPEN:
      return {
        ...action.state,
        isMoreOpen: !state.isMoreOpen,
      };
    case reducerCases.IS_CHAT_OPENED:
      return {
        ...action.state,
        isChatOpened: !state.isChatOpened,
      };
    case reducerCases.IS_TYPE_SETTING:
      return {
        ...state,
        isTypeSetting: action.isTypeSetting,
      };

    default:
      return state;
  }
};

export default reducer;
