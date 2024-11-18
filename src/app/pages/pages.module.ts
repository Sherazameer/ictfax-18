import { NgModule } from '@angular/core';
import { NbMenuModule, NbTableModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DefaultSettingsModule } from './default_settings/default_settings.module';
import { InFaxModule } from './infax/infax.module';
import { ChangePasswordModule } from './changepassword/changepassword.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { TransmissionModule } from './transmission/transmission.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    CommonModule,
    TransmissionModule,
    DefaultSettingsModule,
    InFaxModule,
    ChangePasswordModule,
    RouterModule,
    NbTableModule,
    NbTreeGridModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
