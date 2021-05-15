import { shoppingCartActionsEnum } from '../../Enums/ActionEnums';
import { RentItem } from '../../Models/RentItems.Model';
import { Action } from '@ngrx/store';

export class AddItem implements Action {
  readonly type = shoppingCartActionsEnum.ADD_ITEM;
  constructor(public payload: RentItem) {}
}

export class RemoveItem implements Action {
  readonly type = shoppingCartActionsEnum.REMOVE_ITEM;
  constructor(public payload: String) {}
}

export type Action = AddItem | RemoveItem;
