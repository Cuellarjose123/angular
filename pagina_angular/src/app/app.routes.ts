import { Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PlaneComponent } from './plane/plane.component';



export const routes: Routes = [

    {title: "ADS | Inicio", path:'' , component: InicioComponent},
    {title: "ADS | Inicio", path:'inicio' , component: InicioComponent},
    {title: "ADS | Categoria", path:'categorias' , component: CategoriasComponent},
    {title: "ADS | Plane", path:'plane' , component: PlaneComponent},

];
