import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        fName
        lName
        email
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        _id
        fName
        lName
        email
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      _id
      fName
      lName
      email
      username
    }
  }
`;

export const CREATE_DISH = gql`
  mutation CreateDish($input: CreateDishInput!) {
    createDish(input: $input) {
      _id
      dish_name
      dish_img
      ingredients {
        name
      }
      instructions {
        step
        description
      }
      cook_time
      category
      author {
        _id
        fName
        lName
        email
        username
      }
      created_at
      like_count
    }
  }
`;

export const UPDATE_DISH = gql`
  mutation UpdateDish($dishId: ID!, $input: UpdateDishInput!) {
    updateDish(dishId: $dishId, input: $input) {
      _id
      dish_name
      dish_img
      ingredients {
        name
      }
      instructions {
        step
        description
      }
      cook_time
      category
      author {
        _id
        fName
        lName
        email
        username
      }
      created_at
      like_count
    }
  }
`;

export const SAVE_DISH = gql`
  mutation SaveDish($userId: ID!, $dishId: ID!) {
    saveDish(userId: $userId, dishId: $dishId) {
      _id
      fName
      lName
      email
      username
      dishes {
        _id
        dish_name
        dish_img
        ingredients {
          name
        }
        instructions {
          step
          description
        }
        cook_time
        category
        created_at
        like_count
      }
    }
  }
`;

export const UNSAVE_DISH = gql`
  mutation UnsaveDish($userId: ID!, $dishId: ID!) {
    unsaveDish(userId: $userId, dishId: $dishId) {
      _id
      fName
      lName
      email
      username
      dishes {
        _id
        dish_name
        dish_img
        ingredients {
          name
        }
        instructions {
          step
          description
        }
        cook_time
        category
        created_at
        like_count
      }
    }
  }
`;
