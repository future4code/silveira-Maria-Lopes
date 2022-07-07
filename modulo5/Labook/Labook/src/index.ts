import app from "./controller/app";
import { CommentController } from "./controller/CommentsController";
import { FriendshipController } from "./controller/FriendshipController";
import { LikeController } from "./controller/LikeController";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";

const newUserController = new UserController()
const newPostController = new PostController()
const newFriendshipController = new FriendshipController()
const newLikeController = new LikeController()
const newCommentsController = new CommentController()

// Registro de usuário.
app.post("/signup", newUserController.signup)
// Login usuário.
app.post("/login", newUserController.login)

// Registro de post.
app.post("/createpost", newPostController.createPost)
// Buscando post por id.
app.get("/getpost/:id", newPostController.getPost)

// Fazendo amizade.
app.post("/friendship", newFriendshipController.createFriendship)
// Desfazendo amizade.
app.delete("/unfriend", newFriendshipController.unfriend)

// Ver feed.
app.get("/feed", newPostController.getFeed)
// Ver feed por tipo.
app.get("/feedtype", newPostController.getFeedByType)

// Curtir post.
app.post("/like", newLikeController.likePost)
// Descurtir post.
app.delete("/deslike", newLikeController.unlikePost)
// Comentar post.
app.post("/comments", newCommentsController.commentPost)
// Paginação.
app.get("/pagination", newPostController.pagination)