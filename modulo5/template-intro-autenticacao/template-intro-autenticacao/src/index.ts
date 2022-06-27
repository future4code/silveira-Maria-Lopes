import app from "./app"
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getProfile from './endpoints/getProfiles'

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getProfile)