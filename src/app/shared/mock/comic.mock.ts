import { Comic } from '@marvel-app/comics/models/comic.model';
import { getImageMock } from '@marvel-app/shared/mock/image.mock';
import { getPriceMock } from '@marvel-app/shared/mock/price.mock';
import { getCreatorMock } from '@marvel-app/shared/mock/creator.mock';

const getDefaults = (): Comic => ({
  id: 'string',
  title: 'string',
  description: 'string',
  thumbnail: getImageMock(),
  images: [getImageMock()],
  pageCount: 123,
  series: [{ name: 'string' }],
  dates: [{ type: 'string', date: new Date() }],
  prices: [getPriceMock()],
  creators: { items: [getCreatorMock()] },
  characters: [{ name: 'string' }],
  format: 'string',
  rarity: 'string',
  hasDiscount: false,
});

export const getComicMock = (c?: Partial<Comic>): Comic => ({
  ...getDefaults(),
  ...c
});
