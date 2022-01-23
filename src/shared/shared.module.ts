import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// Service
import { AuthService } from './services/auth.service';

// Components
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    ProfileComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    ProfileComponent,
    MessagesComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
          // Services
          AuthService
      ]
    }
  }
}