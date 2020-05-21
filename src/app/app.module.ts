import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FuncionarioCardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
