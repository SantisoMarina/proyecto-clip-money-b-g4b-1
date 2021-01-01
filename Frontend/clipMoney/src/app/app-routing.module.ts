import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraloginComponent } from './estructuralogin/estructuralogin.component';
import { IniciarsesComponent } from './iniciarses/iniciarses.component';
import { SaldoUsuarioComponent } from './saldo-usuario/saldo-usuario.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TransferenciasCuentasComponent } from './transferencias-cuentas/transferencias-cuentas.component';


const routes: Routes = [
  {path:'',component:EstructuraloginComponent},
  {path:'Inicio',component:NavbarComponent, children:[
    {path:'SaldoUsuario', component:SaldoUsuarioComponent},
    {path:'TransferenciasCuentas', component:TransferenciasCuentasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
