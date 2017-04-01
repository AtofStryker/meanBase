import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';

import { AddUserComponent }  from './add/add.component';
import { DisplayUserComponent }  from './display/display.component';

import { UsersComponent } from './users.component';
import { UserService } from './users-service';

import { UsersRoutingModule } from './users-routing.module';
@NgModule({
  imports:      [ CommonModule, UsersRoutingModule, ReactiveFormsModule ],
  declarations: [ UsersComponent, AddUserComponent, DisplayUserComponent ],
  providers: [UserService]
})
export class UsersModule {}
