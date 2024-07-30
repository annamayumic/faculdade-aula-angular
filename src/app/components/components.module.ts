import { NgModule } from "@angular/core";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports:[
    RouterModule
  ],
  declarations:[
    HeaderComponentComponent
  ],
  exports:[
    HeaderComponentComponent
  ]
})
export class ComponentModule{

}