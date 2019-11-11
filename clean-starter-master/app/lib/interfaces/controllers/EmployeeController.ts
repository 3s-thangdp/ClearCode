import ListEmployeeOff from "../../application/use_cases/employee/ListEmployeeOff";
import { EmployeeEntity } from "../../domain/entities/EmployeeEntity";

export class EmployeeController {
  public readonly listemployeeoff: ListEmployeeOff;
  constructor(listemployeeoff: ListEmployeeOff) {
    this.listemployeeoff = listemployeeoff;
  }

  public async getAllEmployee(): Promise<EmployeeEntity> {
    return this.listemployeeoff.getListEmployee();
  }
}
