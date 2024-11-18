import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ContactRoutingModule, routedComponents } from './contact-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadModule } from 'ng2-file-upload';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbOptionModule, NbSelectModule, NbTableModule, NbTreeGridModule } from '@nebular/theme';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2CompleterModule } from "ng2-completer";
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterModule } from '@angular/router';
import { AddContactComponent } from './contact-form-component';


@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NgxEchartsModule,
    RouterModule,
    ContactRoutingModule,
    ThemeModule,
    NbTableModule,
    FileUploadModule,
    MatButtonModule,
    MatIconModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    TranslateModule,
    Ng2CompleterModule,
    NbInputModule,
    NbTreeGridModule,
    NbSelectModule,
    NbOptionModule,
    NbButtonModule,

  ],
  declarations: [
    ...routedComponents,
    AddContactComponent,
  ],

})
export class ContactModule { }
