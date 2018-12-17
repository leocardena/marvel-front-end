# MarvelFrontEnd

Projeto consumindo a [API da Marvel](https://developer.marvel.com) para listagem de quadrinhos.

## Ferramentas/Libs Utilizadas
- [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.
- [NGRX](https://ngrx.io/)
- [Angular Material](https://material.angular.io/)
- [Angular Flex-Layout](https://github.com/angular/flex-layout)
- [Karma](https://karma-runner.github.io)

## Executar localmente
```
git clone https://github.com/leocardena/marvel-front-end.git
npm install
ng serve
```
Navegue para `http://localhost:4200/`.

## Executando os testes unitários com cobertura
```
ng test --code-coverage
```

## Funcionalidades
- Listagem de quadrinhos
- Visualização dos detalhes do quadrinho
- Visualização de cupons
- Visualização dos quadrinhos em checkout
- Adição e remoção dos quadrinhos em checkout
- Aplicação de descontos nos quadrinhos em checkout individualmente mediante um cupom válido
- Preço total entre os quadrinhos em checkout

## Solução adotada
Para simplificação são carregados 15 quadrinhos a partir da API da Marvel. Após o carregamento 10% são marcados como raros e o restante como comuns. Eles ficam armazenados no state de quadrinhos e referenciados no state de pesquisa. Ao adicionar um quadrinho para checkout ele passa a ser referenciado também no state de checkout. As referências são utilizadas em diferentes states para que cada um armazene apenas informações de sua responsabilidade. <br/>
No checkout é possivel aplicar cupons individualmente aos quadrinhos seguindo a regra: cupons comuns são válidos para quadrinhos comuns e cupons raros são válidos para quadrinhos raros e comuns. Os cupons são validados a partir de um mock implementado com interceptor. Ambos os cupons dão desconto de 10% sobre o valor do quadrinho.
