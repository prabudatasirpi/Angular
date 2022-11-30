import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { NewComponent } from './new/new.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplateComponent } from './template/template.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    TemplateComponent,
    NewComponent,
    ParentComponent,
    ChildComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
    InbuiltPipesComponent,
    CustomPipesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



