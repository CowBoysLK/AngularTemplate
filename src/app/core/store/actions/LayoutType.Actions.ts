import { Action } from '@ngrx/store';
import { LayoutTypeActionEnum } from '../../Enums/ActionEnums';
import { LayoutType } from '../../Models/Layout.Models';

export class UpdateLayoutType implements Action {
  readonly type = LayoutTypeActionEnum.UPDATE_TYPE;
  constructor(public payload: number) {}
}
