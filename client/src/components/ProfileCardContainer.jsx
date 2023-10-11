export function ProfileCardContainer() {
  return (
    <>
      <div>
        <button className="text-white bg-green-700 border border-green-700 border-r-1 rounded-l px-4 py-2">
          Your Dishes
        </button>
        <button className="text-black border border-green-700 border-l-0 rounded-r px-4 py-2 hover:bg-green-700 hover:text-white duration-200">
          Saved Dishes
        </button>
      </div>
      <div className="flex flex-wrap w-full mt-6">{/* Cards Go Here */}</div>
    </>
  );
}
