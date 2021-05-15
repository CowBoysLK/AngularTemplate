import { RentItem } from './core/Models/RentItems.Model';
import { AuthInfo } from './core/Models/AuthInfo.Model';
import { LayoutType } from './core/Models/Layout.Models';

export interface AppState {
  readonly shoppingCart: RentItem[];
  readonly authInfo: AuthInfo;
  readonly layoutType: LayoutType;
}
