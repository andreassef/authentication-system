import { inject, injectable } from "tsyringe";

import { IUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(data: IUsersDTO): Promise<User> {
        const user = await this.usersRepository.create(data);
        return user;
    }
}

export { UsersUseCase };
