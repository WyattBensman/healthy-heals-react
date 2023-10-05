import { DishCardHor } from "../components/DishCardHor";

export function Explore() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center flex-wrap">
        <DishCardHor title="Breakfast" img="breakfast.jpg" />
        <DishCardHor title="Lunch" img="lunch.jpg" />
        <DishCardHor title="Dinner" img="dinner.jpg" />
      </div>
      <div className="flex justify-center flex-wrap">
        <DishCardHor title="Snacks" img="snacks.jpg" />
        <DishCardHor title="Desserts" img="dessert.jpg" />
      </div>
    </div>
  );
}
