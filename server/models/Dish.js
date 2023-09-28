const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  name: String,
});

const instructionSchema = new Schema({
  step: Number,
  description: String,
});

const dishSchema = new Schema({
  dish_name: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  dish_img: {
    type: String,
  },
  ingredients: [ingredientSchema],
  instructions: [instructionSchema],
  cook_time: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  like_count: {
    type: Number,
    default: 0,
  },
});

// Initialize our User model
const Dish = model("Dish", dishSchema);

module.exports = Dish;
