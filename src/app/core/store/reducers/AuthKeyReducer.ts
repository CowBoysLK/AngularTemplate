import { UserActionEnum } from '../../Enums/ActionEnums';
import { UserTypes } from '../../Enums/AuthenticationEnums';
import { AuthInfo } from '../../Models/AuthInfo.Model';
import { Action } from '@ngrx/store';

const initialAuthState = {
  userId: '',
  authToken: '',
  userType: UserTypes.VISITOR,
};

export function AuthReducer(state: AuthInfo = initialAuthState, action: any) {
  switch (action.type) {
    case UserActionEnum.UPDATE_KEY: {
      // console.log(state)
      return {
        ...state,
        authToken: action.payload,
      };
      break;
    }
    case UserActionEnum.UPDATE_ID: {
      // console.log(state)
      return {
        ...state,
        userId: action.payload,
      };
      break;
    }
    case UserActionEnum.UPDATE_TYPE: {
      // console.log(state)
      return {
        ...state,
        userType: action.payload,
      };
      break;
    }

    default:
      return state;
  }
}
