import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerService } from './customers/customer.service';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environiment } from '../environiments/environiments';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environiment.firebase),
    AngularFireDatabaseModule, // for database 
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    CustomerDetailsComponent, 
    CustomersListComponent, 
    CreateCustomerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService]
})
export class AppModule { }
