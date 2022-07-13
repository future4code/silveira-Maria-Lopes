import { UserMockNormal, UserMockAdmin } from "../../tests/mocks/userMock"


export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private role: USER_ROLES) { }

    getId = (): string => {
        return this.id;
    };
    getName = (): string => {
        return this.name;
    };
    getEmail = (): string => {
        return this.email;
    };
    getRole = (): USER_ROLES => {
        return this.role;
    };
}
// um construtor para todos os métodos do meu usuário, que são privados, e fazendo métodos
// de get para cada um deles, para que sejam públicos e eu possa ter acesso à eles em qualquer
// parte do meu código.


export class UserMock {
    // nesse método eu espero receber um usuário válido ou undefined.
    public async stringToUserRole(id: string): Promise<User | undefined> {
        switch (id) {
            case "idmocknormal":
                return UserMockNormal
            case "idmockadmin":
                return UserMockAdmin
            default:
                return undefined
        }
    }
}

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
