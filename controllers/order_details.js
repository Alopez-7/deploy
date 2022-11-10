const Order_details = require('../models/order_details');
const User = require('./users')
const Order = require('./orders')


function createOrderDet(req, res) {
    if (Object.keys(req.body).length == 0) {
        res.status(400).json({error: "null data"});
    } else{
        const body = req.body;
        const today = new Date()
        const exp = new Date(today)
        req.body.date = exp
        Order_details.create(body).then(order => {
            res.status(201).json(order);
        });
    }
}

async function getOrderDetail(req, res) {
    const id = req.params.id;
    if(Number(id)){
        const order = await Order_details.findByPk(id);
        res.status(200).json(order);
    } else {
        res.status(400).json({Error:"enter a correct ID type"});
    }
}

async function getOrdersDetail(req, res) {
    const order = await Order_details.findAll();
    res.status(200).json(order);    
}

async function deleteOrderDetail(req, res) {
    const id = req.params.id;
    if(Number(id)){
        const deleted = Order_details.destroy(
            {where: {id} }
        );
        res.status(200).json({deleted: "Order Detail deleted"});
    } else {
        res.status(400).json({Error:"enter a correct ID type"});
    }
}

async function updateOrderDet(req, res) {
    const id = req.params.id;
    if(Number(id)){
        if (Object.keys(req.body).length == 0) {
            res.status(400).json({error: "null data"});
        } else{
            const order = req.body;
            await Order_details.update(order, {where: {id}});
            const order_updated = await Order_details.findByPk(id);
            res.status(200).json(order_updated);
        }
    } else{
        res.status(400).json({Error:"enter a correct ID type"});
    }
}

module.exports = { createOrderDet,updateOrderDet,getOrderDetail,getOrdersDetail,deleteOrderDetail }