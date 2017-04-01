import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { CoreComponent }  from './core.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule,
  				  HttpModule,
  				  CoreRoutingModule
  				  ],
  declarations: [ CoreComponent,
  				        HeaderComponent,
  				        FooterComponent
  				],
  bootstrap:    [ CoreComponent ],
  providers:    [{provide: APP_BASE_HREF, useValue : '/'}]
})
export class CoreModule { }
