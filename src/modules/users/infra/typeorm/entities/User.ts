import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("users")
export class User {
    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birthday: string;

    @Column()
    cpf: string;

    constructor(
        name: string,
        email: string,
        password: string,
        birthday: string,
        cpf: string
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.cpf = cpf;
    }
}
