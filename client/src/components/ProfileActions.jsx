export function ProfileActions() {
  return (
    <>
      <h1 className="text-xl font-medium text-center">Howdy, Wyatt!</h1>
      <button className="text-lg text-center w-56 mt-4 mb-2 py-2 border border-green-700 hover:bg-green-700 hover:text-white duration-300 rounded">
        Create Dish
      </button>
      <button className="text-lg text-center w-56 my-2 py-2 border border-green-700 hover:bg-green-700 hover:text-white duration-300 rounded">
        Edit Profile
      </button>
      <button className="text-lg text-center w-56 my-2 py-2 border border-red-500 hover:bg-red-500 hover:text-white duration-300 rounded">
        Logout
      </button>
    </>
  );
}
