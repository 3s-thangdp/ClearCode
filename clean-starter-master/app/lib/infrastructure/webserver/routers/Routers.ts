import { router as authRouter } from "./AuthRouter";
import { router as employeeRoute } from "./EmployeeRoute";

// tslint:disable-next-line: export-name
export const routers = [
  // TODO - Declare other routers here, the order are matter in case
  // there are URL overridden
  authRouter,
  employeeRoute
];
