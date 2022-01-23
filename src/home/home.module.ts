import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './containers/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Modules
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
    // Custom Modules
    SharedModule
  ]
})
export class HomeModule { }
