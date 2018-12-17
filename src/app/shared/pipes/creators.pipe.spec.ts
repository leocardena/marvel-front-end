import { CreatorsPipe } from '@marvel-app/shared/pipes/creators.pipe';
import { getCreatorMock } from '../mock/creator.mock';

describe('CreatorsPipe', () => {
  let pipe: CreatorsPipe;

  beforeEach(() => {
    pipe = new CreatorsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return `unknownName param + Desconhecido` when creators is not defined', () => {
    const unknownName = 'unknownName';
    expect(pipe.transform(null, '', unknownName)).toEqual(`${unknownName} Desconhecido`);
  });

  it('should return `unknownName param + Desconhecido` when creators length is 0"', () => {
    const unknownName = 'unknownName';
    expect(pipe.transform([], '', unknownName)).toEqual(`${unknownName} Desconhecido`);
  });

  it('should tranform [{ name: `Albert`, role: `Author` }] to Albert', () => {
    const creator = getCreatorMock({ name: 'Albert', role: 'Author' });
    expect(pipe.transform([creator], creator.role, '')).toEqual(creator.name);
  });

  it('should tranform [{ name: `Albert`, role: `Author` }, { name: `Paulo`, role: `Author` }] to Albert e Paulo', () => {
    const creator = getCreatorMock({ name: 'Albert', role: 'Author' });
    const creator2 = getCreatorMock({ name: 'Paulo', role: 'Author' });
    expect(pipe.transform([creator, creator2], creator.role, '')).toEqual(`${creator.name} e ${creator2.name}`);
  });

  it('should tranform [{ name: `Albert`, role: `Author` }, { name: `Paulo`, role: `Author` },' +
  '{ name: `Zibia`, role: `Author` }] to Albert e Paulo', () => {
    const creator = getCreatorMock({ name: 'Albert', role: 'Author' });
    const creator2 = getCreatorMock({ name: 'Paulo', role: 'Author' });
    const creator3 = getCreatorMock({ name: 'Zibia', role: 'Author' });
    expect(pipe.transform([creator, creator2, creator3], creator.role, '')).toEqual(`${creator.name}, ${creator2.name}, et al`);
  });

});
