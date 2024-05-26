import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./paginas/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
  {
    path: 'elegir-usuario',
    loadChildren: () => import('./paginas/elegir-usuario/elegir-usuario.module').then( m => m.ElegirUsuarioPageModule)
  },
  {
    path: 'registrar-repartidor',
    loadChildren: () => import('./paginas/registrar-repartidor/registrar-repartidor.module').then( m => m.RegistrarRepartidorPageModule)
  },
  {
    path: 'registrar-local',
    loadChildren: () => import('./paginas/registrar-local/registrar-local.module').then( m => m.RegistrarLocalPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./paginas/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'home-local',
    loadChildren: () => import('./paginas/home-local/home-local.module').then( m => m.HomeLocalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
