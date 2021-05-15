import { Action } from '@ngrx/store';
import { UserActionEnum } from '../../Enums/ActionEnums';

export class AuthenticateUser implements Action {
  readonly type = UserActionEnum.UPDATE_KEY;
  constructor(public payload: string) {}
}
export class UpdateUserId implements Action {
  readonly type = UserActionEnum.UPDATE_ID;
  constructor(public payload: string) {}
}
export class UpdateUserType implements Action {
  readonly type = UserActionEnum.UPDATE_TYPE;
  constructor(public payload: number) {}
}
