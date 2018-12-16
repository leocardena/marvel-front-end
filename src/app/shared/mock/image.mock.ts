import { Image } from '@marvel-app/comics/models/image.model';

const getDefaults = (): Image => ({
  path: 'string',
  extension: 'string'
});

export const getImageMock = (i?: Partial<Image>): Image => ({
  ...getDefaults(),
  ...i
});
