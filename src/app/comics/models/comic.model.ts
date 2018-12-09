import { Creator } from '@marvel-app/comics/models/creator.model';
import { Image } from '@marvel-app/comics/models/image.model';
import { Price } from '@marvel-app/comics/models/price.model';

export interface Comic {
  id: string;
  title: string;
  description: string;
  thumbnail: Image;
  images: Image[];
  pageCount: number;
  series: { name: string }[];
  prices: Price[];
  creators: Creator[];
  characters: { name: string }[];
  format: string;
}
