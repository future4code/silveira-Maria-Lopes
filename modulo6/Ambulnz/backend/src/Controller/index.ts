import { OrderController } from './OrderController';
import { PizzaController } from './PizzaController';
import { UserController } from './UserController';
import app from './app'

const userController = new UserController()
const pizzaController = new PizzaController()
const orderController = new OrderController()

// requisições usuário
app.post('/createuser', userController.signup)
app.post('/login', userController.login)

// requisições de pizzas
app.post('/createpizza', pizzaController.createPizzaRequisicao)
app.get('/getallpizzas', pizzaController.getAllPizzasReq)

// requisições de pedidos
app.post('/order', orderController.orderReq)
app.get('/getorders', orderController.getOrders)
app.get('/order/:id', orderController.getOrderById)