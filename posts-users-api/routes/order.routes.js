const Router = require('express')
const router = new Router()
const OrderController  = require('../controller/order.controller')

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);
router.get('/user', OrderController.getOrdersByUser);
router.get('/:id', OrderController.getOrderById);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);


module.exports = router

