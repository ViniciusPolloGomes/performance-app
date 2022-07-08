# Conceito de performance aplicado na pratica em Next.js
A ideia desse projeto é criar uma aplicação basica do zero usando o conceito de performance, detalhes importantes implementados que serão usados em todos os projetos futuros.
<ul>
<li><p>memo</p></li>
<li><p>useMemo</li>
<li><p>useCallback</li>
<li><p>dynamic</li>
<li><p>react-virtualized</li>
<li><p>Verificar e testar usando DevTools com extensões ReactDevTools</li>
</ul>

## Executar a aplicação performance-app
``` 
yarn

yarn server

yarn dev
```
## Packages
```
yarn add json-server -D
```
script : "server": "json-server -d 750 -w -p 3333 ./src/server.js"
```
yarn add react-virtualized

yarn add @types/react-virtualized -D
```

Atualmente, o react-virtualized está usando uma dependencia do react no próprio pacote, e essa dependencia está na versão 17, e por isso no seu projeto acaba dando esse erro, pois a versão 17 e 18 do React são incompatíveis na tipagem.

Enquanto o pessoal do react-virtualized não atualizam a biblioteca, a maneira de resolver isso seria fazendo um downgrade do React para a versão 17, que você pode fazer assim:

```
yarn add react@^17 react-dom@^17

yarn add @types/react@^17 -D
```
react-virtualized(https://bvaughn.github.io/react-virtualized/#/components/List)


### Bundle Analyzer ##### [Next.js + Webpack Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

Bom para saber o que esta deixando nossa aplicação pesada pesada no "build"
```
yarn add lodash

yarn add @types/lodash -D
```

Em productItem.tsx importar lodash 
```typescript
import lodash from 'lodash'
```
Na linha 40 do arquivo :
```typescript
return Object.is(prevProps.product,nextProps.product)
```
Subistituir por:
```typescript
return lodash.isEqual(prevProps.product,nextProps.product)
``` 

```
yarn add @next/bundle-analyzer
```
Criar um arquivo dentro do app chamado next.config.js e colocar esse código:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
```
E agora executar o comando :
```
ANALYZE=true yarn build
```

Devera mostrar no navegador uma ilustração retratando tamanho de cada parte da apicação, incluindo as partes encapsuladas do next.js, que fornece todo o amparo para nossa aplicação funcionar.

