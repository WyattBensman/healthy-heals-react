const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  lName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    max_length: 15,
  },
  password: {
    type: String,
    required: true,
  },
  dishes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dish",
    },
  ],
});

// Hashes Password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Checks if Password is Correct
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Initialize our User model
const User = model("User", userSchema);

module.exports = User;
