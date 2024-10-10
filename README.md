# market-pulse-app

Una app mobile hecha con Expo React-Native. Lista acciones y grafica su cotización, para ello se sirve de [Twelve Data API](https://twelvedata.com/docs). Fue realizada para el code challenge de Mobile de Metafar.

## Instalación

Para instalar las dependencias, ejecutá el siguiente comando:

```bash
npm install
```

> El proyecto incluye el archivo `.env` para facilitar el uso de la misma. De todas formas este archivo incluye datos sensibles, por favor no lo redistribuya.

## Scripts Disponibles

### `start`

```bash
npm start
```

Inicia el servidor de desarrollo de Expo.

### `android`

```bash
npm run android
```

Ejecuta el servidor de desarrollo y abre la aplicación directamente en un emulador de Android o en un dispositivo físico.

### `ios`

```bash
npm run ios
```

Ejecuta el servidor de desarrollo y abre la aplicación directamente en un emulador de iOS o en un dispositivo físico.

### `web`

```bash
npm run web
```

Lanza la aplicación en un navegador web.

### `lint`

```bash
npm run lint
```

Ejecuta el linter de TypeScript para verificar errores de tipo y formatea el código utilizando Biome.

### `test`

```bash
npm run test
```

Ejecuta los `tests` utilizando Jest y recopila la cobertura de las pruebas.

### `test:watch`

```bash
npm run test:watch
```

Ejecuta los `tests` en modo "watch".
