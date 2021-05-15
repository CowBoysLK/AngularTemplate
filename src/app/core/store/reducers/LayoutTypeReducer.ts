import { LayoutTypeActionEnum } from '../../Enums/ActionEnums';
import { LayoutTypes } from '../../Enums/layoutEnums';
import { LayoutType } from '../../Models/Layout.Models';

const initialLayoutState = {
  type: LayoutTypes.WITH_HEADER,
};

export function LayoutTypeReducer(
  state: LayoutType = initialLayoutState,
  action: any
) {
  switch (action.type) {
    case LayoutTypeActionEnum.UPDATE_TYPE: {
      // console.log(state)
      return {
        ...state,
        type: action.payload,
      };
      break;
    }

    default:
      return state;
  }
}
