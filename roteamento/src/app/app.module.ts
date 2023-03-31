import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent,
    LoginComponent
  ],
  imports: [

    BrowserModule,
    AppRouteModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
