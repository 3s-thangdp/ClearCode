import { EmployeeEntity } from "../../domain/entities/EmployeeEntity";

export interface IEmployeeRepository {
  getAllEmployee(): Promise<EmployeeEntity>;
}
