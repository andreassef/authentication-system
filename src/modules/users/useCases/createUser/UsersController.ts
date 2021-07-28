import { Request, Response } from "express";
import { container } from "tsyringe";

import { UsersUseCase } from "./UsersUseCase";

class UsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, birthday, cpf } = request.body;
        const createUserUseCase = container.resolve(UsersUseCase);
        const user = await createUserUseCase.execute({
            name,
            email,
            password,
            birthday,
            cpf,
        });

        return response.status(201).json(user);
    }
}

export { UsersController };
