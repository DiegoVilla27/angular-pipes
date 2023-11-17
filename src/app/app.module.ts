import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilterSalaryPipe } from "./pipes/filter-salary.pipe";
import { FilterSalaryNotPurePipe } from "./pipes/filter-salary-not-pure.pipe";

@NgModule({
  declarations: [AppComponent, FilterSalaryPipe, FilterSalaryNotPurePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
