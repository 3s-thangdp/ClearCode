import { isEmpty } from "lodash";
import { EmployeeEntity } from "../../../domain/entities/EmployeeEntity";
import {
  MissingRequiredInputsProblem,
  Problem
} from "../../../domain/entities/Problem";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

export default class ListEmployeeOff {
  private readonly employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  public async execute(
    todayDate: Date,
    employeeName: string,
    timeOfRequest: Number,
    beginDay: Date,
    endingDay: Date,
    employeeSign: String,
    employeeSignDay: Date,
    bossSign: String,
    bossSignDay: Date
  ): Promise<EmployeeEntity | Problem> {
    // // tslint:disable-next-line: possible-timing-attack
    // if (isEmpty(email) || isEmpty(password)) {
    if (
      isEmpty(todayDate) ||
      isEmpty(employeeName) ||
      isEmpty(timeOfRequest) ||
      isEmpty(beginDay) ||
      isEmpty(endingDay) ||
      isEmpty(employeeSign) ||
      isEmpty(employeeSignDay) ||
      isEmpty(bossSign) ||
      isEmpty(bossSignDay)
    ) {
      return new MissingRequiredInputsProblem();
    }
  }
  public async getListEmployee(): Promise<EmployeeEntity> {
    return this.employeeRepository.getAllEmployee();
  }
}
