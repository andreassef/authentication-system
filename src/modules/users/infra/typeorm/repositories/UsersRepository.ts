import { getMongoRepository, MongoRepository } from "typeorm";

import { IUsersDTO } from "../../../dtos/IUsersDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: MongoRepository<User>;

    constructor() {
        this.repository = getMongoRepository(User);
    }

    async create(data: IUsersDTO): Promise<User> {
        const user = await this.repository.save(data);
        return user;
    }
}

export { UsersRepository };
