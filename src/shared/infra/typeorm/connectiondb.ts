import { createConnection, Connection } from "typeorm";

export default (): Promise<Connection> => {
    return createConnection();
};
