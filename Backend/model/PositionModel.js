const { model } = require("mongoose");

const { PostionsSchema } = require("../schema/PositionsSchema");

const PositionsModel = new model("Position", PostionsSchema);

module.exports = { PositionsModel };
