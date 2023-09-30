const { User, Dish } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // All Dishes
    dishes: async () => {
      return Dish.find();
    },
    // Single User
    user: async (_, { userId }) => {
      try {
        return User.findOne({ _id: userId });
      } catch (err) {
        throw new Error(err);
      }
    },
    // Single Dish
    dish: async (_, { dishId }) => {
      try {
        return Dish.findOne({ _id: dishId });
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    // Login
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        throw new Error(err);
      }
    },
    // Create User
    createUser: async (_, { fName, lName, email, username, password }) => {
      try {
        console.log("Attempting to create user with the following data:");
        console.log(
          `fName: ${fName}, lName: ${lName}, email: ${email}, username: ${username}, password: ${password}`
        );

        const user = await User.create({
          fName,
          lName,
          email,
          username,
          password,
        });

        const token = signToken(user);
        console.log(token);
        return { token, user };
      } catch (err) {
        throw new Error(err);
      }
    },
    // Update User
    updateUser: async (_, { fName, lName, email, username, password }) => {
      try {
        return User.findByIdAndUpdate(
          { _id: userId },
          { fName, lName, email, username, password },
          { new: true }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
    // Create Dish
    createDish: async (
      _,
      {
        dish_name,
        dish_img,
        ingredients,
        instructions,
        cook_time,
        category,
        author,
      }
    ) => {
      try {
        const newDish = await Dish.create({
          dish_name,
          dish_img,
          ingredients,
          instructions,
          cook_time,
          category,
          author,
        });

        const userData = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { dishes: newDish._id } },
          { new: true }
        );

        return newDish;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Update Dish
    updateDish: async (
      _,
      { dish_name, dish_img, ingredients, instructions, cook_time, category }
    ) => {
      try {
        return Dish.findByIdAndUpdate(
          { _id: dishId },
          {
            dish_name,
            dish_img,
            ingredients,
            instructions,
            cook_time,
            category,
          },
          { new: true }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
