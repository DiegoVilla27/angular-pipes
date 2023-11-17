import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { FilterSalaryPipe } from "./pipes/filter-salary.pipe";
import { FilterSalaryNotPurePipe } from "./pipes/filter-salary-not-pure.pipe";
import { TitleCasePipe } from "@angular/common";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, FilterSalaryPipe, FilterSalaryNotPurePipe],
      providers: [TitleCasePipe]
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
