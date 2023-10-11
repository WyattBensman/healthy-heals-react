export function DishCard({ title, img, description }) {
  return (
    <>
      <div className="p-2">
        <div className="md:w-92 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img className="rounded-t-lg h-[200px]" src={`/images/${img}`} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h5>
            </a>
            <p className="mb-2 text-sm text-gray-700">{description}</p>
            <div className="flex text-center mt-4 mb-2">
              <div className="w-full">
                <h6 className="mb-1 text-sm font-semibold text-gray-700">
                  Cook Time
                </h6>
                <p className="mb-1 text-sm text-gray-700">15 Minutes</p>
              </div>
              <div className="w-full">
                <h6 className="mb-1 text-sm font-semibold text-gray-700">
                  Ingredients
                </h6>
                <p className="mb-1 text-sm text-gray-700">8</p>
              </div>
              <div className="w-full">
                <h6 className="mb-1 text-sm font-semibold text-gray-700">
                  Instructions
                </h6>
                <p className="mb-1 text-sm text-gray-700">4 Steps</p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex justify-center items-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
