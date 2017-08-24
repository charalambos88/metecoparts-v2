import { Image } from '../models/image';

export interface Car {
  id: number;
  make: string;
  model: string;
  version: string;
  engine_bundle: string;
  engine_code: string;
  year: string;
  trim: string;
  fuel: string;
  cubism: string;
  car_color: string;
  chassis_number: string;
  engine_number: string;
  extra_leather_seats: boolean;
  extra_ac: boolean;
  extra_kotsadoros: boolean;
  extra_mirrors: boolean;
  extra_navigation: boolean;
  extra_windows: boolean;
  extra_sun_roof: boolean;
  created_at: number;
  images: Image[]
}
