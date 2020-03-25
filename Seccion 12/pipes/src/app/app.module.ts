import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { TextoLargoPipe } from './texto-largo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    TextoLargoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
