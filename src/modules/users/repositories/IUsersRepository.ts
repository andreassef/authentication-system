import { IUsersDTO } from "../dtos/IUsersDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
    create(data: IUsersDTO): Promise<User>;
}

export { IUsersRepository };
