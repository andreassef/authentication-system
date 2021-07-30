import { Router } from "express";

import { UsersController } from "../../../../modules/users/useCases/createUser/UsersController";
import { ListUsersController } from "../../../../modules/users/useCases/ListUsers/ListUsersController";

const usersRoutes = Router();
const usersController = new UsersController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", usersController.handle);
usersRoutes.get("/:email", listUsersController.handle);

export { usersRoutes };
