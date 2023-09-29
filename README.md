
## Requisitos
- Angular 16 para web
- node 16

## guia de instalacion de angular 16 
https://www.codeproject.com/Articles/5360980/Angular-Migration-to-16
## Pasos

0. Clonar el respositorio
```
git clone https://github.com/oliverPTY/SignalsChapter.git
```

1. Levantar el proyecto con el comando
```
ng serve
```

2. Se importa signals en la pagina ***user.page***
```
   import { Component, OnInit, inject, signal } from '@angular/core';
```
3. Se agrega la señal, se remplaza por ***public character: Characters[] = [];***
```
   public character = signal<Characters[]>([]);

```
4. en el html se cllama al la señal, se remplaza por ***<div class="card" style="width: 18rem;" *ngFor="let item of character">***
```
   <div class="card" style="width: 18rem;" *ngFor="let item of character()">

```
5. Se agrega actualizar el valor de la señal en el observable, se remplaza por  ***this.character = response;*** en el page users-page.component.ts en la linea 15
```
      this.userService.loadPage().subscribe(response =>{
      this.character.set(response);
    });
   
```
6. Ahora se crea este componente ***ng g c users/pages/header***
```
    ng g c users/pages/header
```

7. en el componente **users/pages/header** se inyecta el servicio ***recuerda importar el servicio y el inyect**
```
    public userService = inject(UsersService)
```

8. en el servicio ***user services*** se crean 3 señales arriba del constructor ***Recuerda importar las señales ***

```
  public nameCharacter = signal<string>('');
  public species = signal<string>('');
  public status = signal<string>('');
```

8. Ahora se declara el header del componente que se creo anteriormente en la pagina  ***User.page***

```
<app-header></app-header>
```

9. en este mismo componente  ***app-header*** se llama a las señales del servicio. 

```
<h1>Personaje seleccionado: {{userService.nameCharacter() ? userService.nameCharacter() : 'Ninguno'}}</h1>
<h3>Especie: {{ userService.species() ? userService.species() : 'Ninguno'}}</h3>
<h3>Status: {{ userService.status() ? userService.status() : 'Ninguno'}}</h3>

```

10. ahora el user-page.component.html se agrega la directiva click en el boton Ver mas. 

```
<a class="btn btn-primary" (click)="
          checkInfo(
            item.name, item.species, item.status
          )">Ver mas</a>

```

11. ahora el user-page.component.ts se agrega el siguiente metodo que actualizara el nombre. 

```
public checkInfo(name: string, species: string, status: string): void {
   this.userService.nameCharacter.set(name);
   this.userService.species.set(species);
   this.userService.status.set(status);
  }
```