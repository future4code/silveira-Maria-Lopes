import app from "./app";
import UserController from "./UserController";


const newUserController = new UserController()

app.post("/signup", newUserController.signup)
app.post("/login", newUserController.login)
app.get("/all", newUserController.getUser)
app.delete("/deleteuser/:id", newUserController.deleteUser)
