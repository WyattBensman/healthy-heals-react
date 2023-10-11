import { DishCard } from "../components/DishCard";
import { ProfileActions } from "../components/ProfileActions";
import { ProfileCardContainer } from "../components/ProfileCardContainer";

export function Profile() {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-10 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <div className="md:w-2/12 w-full flex flex-col items-center">
          <ProfileActions />
        </div>
        <div className="ml-8 w-full flex flex-col items-center">
          {/* Maybe change this so buttons are here, & there's 2 different card container's to render using Ternary */}
          <ProfileCardContainer />
        </div>
      </div>
    </>
  );
}
