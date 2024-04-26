import Herobg from '../assets/savvy assets/HomePage/hero.png';

export const Hero = () => {
  return (
    <div className="p-5 py-10 justify-between  bg-tetiary-color md:h-[900px]   bg-button-Color grid grid-cols-2 md:px-[140px] items-center">
      <div>
        <div className="flex flex-col gap-10">
          <div className="text-2xl md:text-[70px] font-bold py-3 md:leading-none text-primary-color">
            <h1>Discover Your Style With FashionSavvy</h1>
          </div>
          <div className="text-xs flex gap-10 text-primary-color">
            <ul className="flex flex-col gap-3">
              <li>Attract Customers</li>
              <li>Drive Sales</li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li>Tracking Customer Details</li>
              <li>Stay Organized</li>
            </ul>
          </div>

          <form
            action=""
            className="py-2  bottom-0">
            <input
              type="text"
              placeholder="insert your email"
              className="p-3 rounded-md md:w-[500px]"
            />
            <button className="relative right-[160px] bg-tetiary-color p-2 rounded-md w-[150px] font-bold">
              Shop now
            </button>
          </form>
        </div>
      </div>
      <div className="w-[500px] bg-[#fff] rounded-2xl ml-[100px] hidden md:block">
        <div className="md:w-[700px] relative -left-[70px]">
          <img
            className="md:w-full"
            src={Herobg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
