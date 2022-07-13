import { User } from './../src/Data/User';
import { USER_ROLES } from './../../src/Model/User';


export const UserMockNormal = new User(
    "idmocknormal",
    "normal",
    "normaluser@hotmail.com",
    USER_ROLES.NORMAL
)

export const UserMockAdmin = new User(
    "idmockadmin",
    "admin",
    "adminuser@hotmail.com",
    USER_ROLES.ADMIN
)
// dados mocados para fazer testes nas minhas requisições.