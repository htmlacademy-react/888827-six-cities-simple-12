export type City = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type NameCity = {
  location: City;
  name: string;
}

export type Point = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type OfferCity = {
  bedrooms: number;
  city: NameCity;
  description: string;
  goods: string;
  host: Host;
  id: number;
  images: string;
  isPremium: boolean;
  location: Point;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = OfferCity[];
export type Points = Point[];
