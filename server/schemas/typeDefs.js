const typeDefs = `
type User {
    _id: ID!
    fName: String!
    lName: String!
    email: String!
    username: String!
    password: String!
    dishes: [Dish]
}

type Ingredient {
    name: String
  }
  
type Instruction {
    step: Int
    description: String
}

type Dish {
    _id: ID!
    dish_name: String!
    dish_img: String
    ingredients: [Ingredient]
    instructions: [Instruction]
    cook_time: Int!
    category: String!
    author: User!
    created_at: String!
    like_count: Int!
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    dishes: [Dish]
    user(userId: ID!): User
    dish:(dishId: ID!): Dish
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(input: CreateUserInput!): Auth
    updateUser(input: UpdateUserInput!): User
    createDish(input: CreateDishInput!): Dish
    updateDish(dishId: ID!, input: UpdateDishInput!): Dish
    saveDish(userId: ID!, dishId: ID!): User
    unsaveDish(userId: ID!, dishId: ID!): User
}

## Inputs
input CreateUserInput {
    fName: String!
    lName: String!
    email: String!
    username: String!
    password: String!
}

input UpdateUserInput {
    fName: String
    lName: String
    email: String
    username: String
    password: String
  }

  input CreateDishInput {
    dish_name: String!
    dish_img: String
    ingredients: [IngredientInput]!
    instructions: [InstructionInput]!
    cook_time: Int!
    category: String!
    author: ID!
  }

  input UpdateDishInput {
    dish_name: String
    dish_img: String
    ingredients: [IngredientInput]
    instructions: [InstructionInput]
    cook_time: Int
    category: String
  }

  input IngredientInput {
    name: String
  }
  
  input InstructionInput {
    step: Int
    description: String
  }
`;

module.exports = typeDefs;
