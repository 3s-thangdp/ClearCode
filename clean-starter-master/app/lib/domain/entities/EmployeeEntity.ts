import * as mongoose from "mongoose";

export class EmployeeEntity {
  public _idEmployee: String;
  public toDayDate: Date;
  public employeeName: String;
  public timeOfRequest: Number;
  public beginDay: Date;
  public endingDay: Date;
  public employeeSign: String;
  public employeeSignDay: Date;
  public bossSign: String;
  public bossSignDay: Date;

  constructor(json: any) {
    Object.assign(this, json);
  }
}
const employeeOffSchema = new mongoose.Schema({
  _idEmployee: String,
  todayDate: Date,
  employeeName: String,
  timeOfRequest: Number,
  beginDay: Date,
  endingDay: Date,
  employeeSign: String,
  employeeSignDay: Date,
  bossSign: String,
  bossSignDay: Date
});
export const employeeOff = mongoose.model("EmployeeOff", employeeOffSchema);
