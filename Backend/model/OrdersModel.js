const { model } = require("mongoose");
const { OrdersSchema } = require("../schema/OrdersSchema");

const OrdersMOdel = new model("order", OrdersSchema);
module.exports = { OrdersMOdel };
