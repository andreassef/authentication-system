import { inject, injectable } from "tsyringe";

import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(email: string): Promise<User[]> {
        const user = await this.usersRepository.listUsers(email);
        return user;
    }
}

export { ListUsersUseCase };
