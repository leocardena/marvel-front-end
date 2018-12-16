import { Price } from '@marvel-app/comics/models/price.model';

const getDefaults = (): Price => ({
  type: 'string',
  price: 123
});

export const getPriceMock = (p?: Partial<Price>): Price => ({
  ...getDefaults(),
  ...p
});
