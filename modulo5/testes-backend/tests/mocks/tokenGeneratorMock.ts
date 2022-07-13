import { USER_ROLES } from "../../src/model/User"
import { AuthenticationDataInterface } from "../../src/Services/TokenGenerator"

export class TokenGeneratorMock {
    public generate = (input: AuthenticationDataInterface): string => {
        return "token"
    }

    public verify(token: string) {
        return {
            id: "id_mock",
            role: USER_ROLES.NORMAL
        }
    }
}