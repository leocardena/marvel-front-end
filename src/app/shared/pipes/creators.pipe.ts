import { Pipe, PipeTransform } from '@angular/core';

import { Creator } from '@marvel-app/comics/models/creator.model';

@Pipe({
  name: 'creators'
})
export class CreatorsPipe implements PipeTransform {

  private defaultRole = 'writer';

  transform(creators: null | Creator[], role: string, unknownName: string) {
    if (!creators) {
      return `${unknownName} Desconhecido`.trim();
    }

    const roleFilter = role || this.defaultRole;
    const newCreators = creators.filter(creator => creator.role === roleFilter)
      .map(creator => creator.name);

    switch (newCreators.length) {
      case 0:
        return `${unknownName} Desconhecido`.trim();
      case 1:
        return newCreators[0];
      case 2:
        return newCreators.join(' e ');
      default:
        const firstCreators = newCreators.slice(0, 2);
        return `${firstCreators.join(', ')}, et al`;
    }
  }

}
