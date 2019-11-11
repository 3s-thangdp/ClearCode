import { IEmployeeRepository } from "../../application/repositories/IEmployeeRepository";
import {
  EmployeeEntity,
  employeeOff
} from "../../domain/entities/EmployeeEntity";

export default class EmployeeRepository implements IEmployeeRepository {
  public async getAllEmployee(): Promise<EmployeeEntity> {
    try {
      const items: any = employeeOff.find({});
      return items;
    } catch (err) {
      console.error("Caught error", err);
    }
  }
}
