# Facebook Clone

- Proyecto en Angular 16.
- Uso de Firebase (Firestore, Authentication, Storage)..
- Tailwind y Flowbite...
- HeroIcons...
- ...


## Creación de las credenciales en Firebase!

Para esto hay que tener una cuenta en google y dirigirnos a la página de <b> Firebase </b> 

<a target="_blank" href="https://firebase.google.com/?hl=es-419">
  <img src="https://skillicons.dev/icons?i=firebase" />
</a>

<br/>

Al entrar en la consola crearemos un proyecto y seleccionaremos los recursos necesarios, por último añadiremos un <b> App web </b> que nos dará nuestra configuración.

En este caso tener crear una carpeta de enviroment y dentro un archivo environment.ts

```ts
// environment.ts
export const environment = {
  firebase: {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  }
};
```