import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatmaterailModule } from './matmaterail.module';
import { LibraryModule } from './component/library/library.module';
import { ReceipeModule } from './component/receipe/receipe.module';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { HttpLogInterceptorService } from './service/http-log-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatmaterailModule,
    LibraryModule,
    ReceipeModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS , useClass: HttpInterceptorService , multi :true},
    {provide: HTTP_INTERCEPTORS , useClass: HttpLogInterceptorService , multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
