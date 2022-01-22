import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AuthComponent } from './containers/auth/auth.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'auth', component: AuthComponent}
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
    // Custom Modules
    SharedModule.forRoot()
  ]
})
export class AuthModule { }
