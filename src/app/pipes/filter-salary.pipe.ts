import { Pipe, PipeTransform } from "@angular/core";
import { IUser } from "../interfaces/user.interface";

@Pipe({
  name: "filterSalary"
})
export class FilterSalaryPipe implements PipeTransform {
  transform(users: IUser[], filter: number): IUser[] {
    //console.log('Pure')
    const list = users.filter((user: IUser) => user.salary >= filter);
    return list;
  }
}
