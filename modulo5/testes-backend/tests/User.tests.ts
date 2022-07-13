import { USER_ROLES } from './../src/Model/User';
import { UserDatabase } from './../src/Data/UserDataBase';
import { UserDatabaseMock } from './mocks/userDatabaseMock';
import { HashMockGenerator } from './mocks/hashGeneratorMock';
import { UserBusiness } from './../src/Business/UserBusiness';
import { IdGeneratorMock } from './mocks/idGeneratorMock';
import { TokenGenerator } from '../src/Services/TokenGenerator';


const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new TokenGenerator(),
    new HashMockGenerator(),
    new UserDatabaseMock()
)

describe('getUserById', () => {

    test('checking if user not found by id', async () => {
        try {
            await userBusinessMock.getUserById("")
        } catch (error: any) {
            expect(error.message).toEqual("Missing input")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })



})