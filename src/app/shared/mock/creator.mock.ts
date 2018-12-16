import { Creator } from '@marvel-app/comics/models/creator.model';

const getDefaults = (): Creator => ({
  name: 'string',
  role: 'string'
});

export const getCreatorMock = (c?: Partial<Creator>): Creator => ({
  ...getDefaults(),
  ...c
});
