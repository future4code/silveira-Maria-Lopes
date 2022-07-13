import { UserDatabaseMock } from './../../tests/mocks/userDatabaseMock';
import { HashMockGenerator } from './../../tests/mocks/hashGeneratorMock';
import { IdGeneratorMock } from './../../tests/mocks/idGeneratorMock';
import { TokenGenerator } from './../Services/TokenGenerator';
import { CustomError } from './../Errors/CustomError';


export class UserBusiness {
    constructor(
        private IdGeneratorMock: IdGeneratorMock,
        private TokenGenerator: TokenGenerator,
        private HashMockGenerator: HashMockGenerator,
        private userDataBase: UserDatabaseMock
    ) { };


    public async getUserById(id: string) {
        try {

            if (!id) {
                throw new CustomError(422, "Missing id!")
            }

            const userId = await this.userDataBase.getUserByIdMock(id)

            if (!userId) {
                throw new CustomError(404, "User not found!")
            }

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }









}
