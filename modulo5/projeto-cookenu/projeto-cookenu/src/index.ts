import app from "./app"
import getRecipe from "./endpoints/GetRecipes"
import getAnotherUserProfile from "./endpoints/GetUserProfile"
import getUserProfile from "./endpoints/GetUserProfile"
import login from "./endpoints/Login"
import registerRecipe from "./endpoints/RegisterRecipe"
import createUser from "./endpoints/SignUp"

// Cadastrar usuário.
app.post("/signup", createUser)

// Fazer login.
app.post("/login", login)

// Pegar próprio perfil.
app.get("/user/profile", getUserProfile)

// Pegar perfil de algum usuário por ID no path params e token no Authorization.
app.get("/user/:id", getAnotherUserProfile)

// Cadastrar receita.
app.post("/recipe", registerRecipe)

// Pegar receita por ID no path params.
app.get("/recipe/:id", getRecipe)