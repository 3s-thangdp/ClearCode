import { Request, Response, Router } from "express";
import { resolve } from "../../../domain/container/Container";
import { EmployeeController } from "../../../interfaces/controllers/EmployeeController";

export const router = Router();

router.get("/employee", async (request: Request, response: Response) => {
  console.log("thang");
  const employeeController = resolve<EmployeeController>("employeeController");
  response.sendPromise(employeeController.getAllEmployee());
});
