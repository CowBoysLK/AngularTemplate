import { shoppingCartActionsEnum } from '../../Enums/ActionEnums';
import { RentItem } from '../../Models/RentItems.Model';

// const initialState = {
//     itemId: '001',
//     colour: 'red',
//     name: 'lawn mover',
//     value: 30
// }

export function ShoppingCartReducer(state: RentItem[] = [], action: any) {
  switch (action.type) {
    case shoppingCartActionsEnum.ADD_ITEM: {
      // console.log(state)
      return [...state, action.payload];
      break;
    }
    case shoppingCartActionsEnum.REMOVE_ITEM: {
      return state.filter((item) => item.itemId != action.payload);
    }

    default:
      return state;
  }
}
