import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { NgFor } from '@angular/common';
import { MyPipePipe } from './my-pipe.pipe';
import { CreatecustomdirectiveDirective } from './createcustomdirective.directive';


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
    MyPipePipe,
    CreatecustomdirectiveDirective,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



