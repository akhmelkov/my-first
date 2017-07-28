import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {SelectModule} from 'ng2-select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './modules/dashboard/ui/dashboard.component';

import { ItemService } from './resources/item/item-service.service';
import { CustomSelectComponent } from './core/utils/custom-select/custom-select.component'

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CustomSelectComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule,
        SelectModule,
    ],
    providers: [ItemService],
    bootstrap: [AppComponent]
})
export class AppModule { }
