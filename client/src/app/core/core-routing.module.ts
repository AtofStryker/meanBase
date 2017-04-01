import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ path:'Users', loadChildren: 'app/users/users.module#UsersModule'},
	{ path:'**', redirectTo: 'Users'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule {}