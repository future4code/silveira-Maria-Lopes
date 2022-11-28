import { UserController } from './UserController';
import app from './app'
import { TaskController } from './TaskController';


const taskController = new TaskController()

// criar tarefa
app.post('/task', taskController.createTask)
// buscar tarefas
app.get('/tasks', taskController.getTasks)
// editar tarefa pelo id
app.put('/task/:id', taskController.editTaskById)
// deletar tarefa pelo id
app.delete('/task/:id',  taskController.deleteTaskById)
// pegar tarefa por id
app.get('/gettask/:id', taskController.getTaskById)


const userController = new UserController()

// cadastrar usuário
app.post('/user', userController.signup)
// login 
app.post('/login', userController.login)