import { Pipe, PipeTransform } from "@angular/core";
import { IUser } from "../interfaces/user.interface";

@Pipe({
  name: "filterSalaryNotPure",
  pure: false
})
export class FilterSalaryNotPurePipe implements PipeTransform {
  transform(users: IUser[], filter: number): IUser[] {
    //console.log('Not pure')
    const list = users.filter((user: IUser) => user.salary >= filter);
    return list;
  }
}
