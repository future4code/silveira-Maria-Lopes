import app from "./services/controller/app";
import { CommentController } from "./services/controller/CommentsController";
import { FriendshipController } from "./services/controller/FriendshipController";
import { LikeController } from "./services/controller/LikeController";
import { PostController } from "./services/controller/PostController";
import { UserController } from "./services/controller/UserController";

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
app.post("/unfriend", newFriendshipController.unfriend)

// Ver feed.
app.get("/feed", newPostController.getFeed)
// Ver feed por tipo.
app.get("/feedtype", newPostController.getFeedByType)

// Curtir post.
app.post("/like", newLikeController.likePost)
// Descurtir post.
app.post("/deslike", newLikeController.unlikePost)
// Comentar post.
app.post("/comments", newCommentsController.commentPost)
// Paginação.
app.get("/pagination", newPostController.pagination)