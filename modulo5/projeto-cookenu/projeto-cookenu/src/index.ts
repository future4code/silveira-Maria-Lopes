import app from "./app"
import createUser from "./endpoints/SignUp"
import login from "./endpoints/Login"
import getOwnProfile from "./endpoints/GetUserProfile"
import getAnotherUserProfile from "./endpoints/GetAnotherUserById"
import registerRecipe from "./endpoints/RegisterRecipe"
import getRecipe from "./endpoints/GetRecipeById"
import followUser from "./endpoints/FollowUser"
import unfollowUser from "./endpoints/UnfollowUser"
import getFeedRecipes from "./endpoints/GetFeedRecipes"
import editRecipe from "./endpoints/EditRecipe"
import deleteRecipe from "./endpoints/DeleteRecipe"
import deleteUser from "./endpoints/DeleteUserAccount"

// USUÁRIOS
// Cadastrar usuário.
app.post("/signup", createUser)
// Fazer login.
app.post("/login", login)
// // Pegar próprio perfil.
app.get("/user/profile", getOwnProfile)
// // Pegar perfil de algum usuário por ID no path params e token no Authorization.
app.get("/user/:id", getAnotherUserProfile)
// Deletar usuário.
app.delete("/deleteuser/:id", deleteUser)

// RECEITAS
// Cadastrar receita.
app.post("/recipe", registerRecipe)
// Pegar receita por ID no path params.
app.get("/recipe/:id", getRecipe)
// Pegar feed de receitas.
app.get("/feedrecipes", getFeedRecipes)
// Editar receita.
app.put("/editrecipe/:id", editRecipe)
// Deletar receita.
app.delete("/deleterecipe/:id", deleteRecipe)

// ENDPOINTS TABELA INTERMEDIÁRIA: SEGUIR E DEIXAR DE SEGUIR USUÁRIO
// Seguir usuário.
app.post("/user/follow", followUser)
// Deixar de seguir usuário.
app.post("/user/unfollow", unfollowUser)
