import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.params;
        const listUsersUseCase = container.resolve(ListUsersUseCase);

        const user = await listUsersUseCase.execute(email);

        return response.status(200).json(user);
    }
}

export { ListUsersController };
