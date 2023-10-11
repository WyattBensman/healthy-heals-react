import { gql } from "@apollo/client";

export const GET_DISHES = gql`
  query GetDishes {
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

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
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

export const GET_DISH = gql`
  query GetDish($dishId: ID!) {
    dish(dishId: $dishId) {
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
