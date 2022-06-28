import app from "./app"
import createUser from "./endpoints/CreateUser"
import { HashManager } from "./services/HashManager"
import Login from "./endpoints/Login"
import userProfile from "./endpoints/UserProfile"

app.post('/user/signup', createUser)
app.post('/user/login', Login)
app.get('/user/profile', userProfile)

const senhaCriptografada = new HashManager().createHash("batata")

console.log(senhaCriptografada)

const compare = new HashManager().compareHash("batata", senhaCriptografada)

console.log(compare)