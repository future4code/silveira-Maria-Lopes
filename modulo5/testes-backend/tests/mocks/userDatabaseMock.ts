import { UserMockNormal, UserMockAdmin } from './userMock'
import { User } from '../../src/model/User';




export class UserDatabaseMock {
    public async getUserByIdMock(id: string): Promise<User | undefined> {
        switch (id) {
            case "idmocknormal":
                return UserMockNormal
            case "idmockadmin":
                return UserMockAdmin
            default:
                return undefined
        }
        // se for idmocknormal, retornará UserMockNormal;
        // se for idmockadmin, retornará UserMockAdmin.
    }
}