import { DishCard } from "../components/DishCard";

export function Home() {
  return (
    <div className="flex lg:flex-row flex-col mt-10 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="lg:w-1/5 w-100 mr-8 mb-4">
        <h2 className="font-medium text-xl mb-3">
          <i> Discover Your Perfect Dish</i>
        </h2>
        <p className="">
          Looking for a delicious and nutritious meal? Explore the wide range of
          recipes and discover your next favorite dish. Whether you're a
          seasoned chef or a cooking beginner, our platform offers something for
          everyone. Get inspired and start cooking today!
        </p>
      </div>
      <div className="w-full flex justify-center flex-wrap">
        <DishCard
          title="Honey Glazed Atlantic Salmon"
          img="dinner.jpg"
          description="A sweet and savory meal that will leave you wanting more!"
        />
        <DishCard
          title="Honey Glazed Atlantic Salmon"
          img="lunch.jpg"
          description="A sweet and savory meal that will leave you wanting more!"
        />
        <DishCard
          title="Honey Glazed Atlantic Salmon"
          img="lunch.jpg"
          description="A sweet and savory meal that will leave you wanting more!"
        />
        <DishCard
          title="Honey Glazed Atlantic Salmon"
          img="lunch.jpg"
          description="A sweet and savory meal that will leave you wanting more!"
        />
      </div>
    </div>
  );
}
