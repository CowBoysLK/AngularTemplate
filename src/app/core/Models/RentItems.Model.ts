export interface SelectedDuration {
  startingDate: Date;
  endingDate: Date;
  unAvalableDates: Date[];
}

export interface RentItem {
  itemId: number;
  name: string;
  description?: string;
  price: number;
  addressLine?: string;
  city?: string;
  singleItem?: boolean;
  quatity: number;
  autoApprove?: boolean;
  activeItem?: boolean;
  addToFeaturedItems?: boolean;
  avalableDurations?: SelectedDuration[];
  pictureLocations?: string[];
}
