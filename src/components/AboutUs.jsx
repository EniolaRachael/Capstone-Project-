import Logo from '../assets/Logo.svg';
// import arrow-right from '../../assets/savvy assets/HomePage/arrow-right.svg'

export const AboutUs = () => {
  return (
    <div>
      <div className="py-4 px-5 flex justify-center bg-text-tetiary-color w-full gap-5">
        <div className="bg-tetiary-color bg-opacity-10">
          <div className=" p-3 w-40  md:w-[300px]">
            <img
              className="w-full bg-button-color rounded-lg"
              src={Logo}
              alt=""
            />
            <p className="text-xs font-semibold mt-3">Read More </p>
            {/* <img src="arrow-right" alt="" /> */}
          </div>
        </div>

        <div className="font-bold text-primary-color px-1 py-7 md:w-1/2 ">
          <h1 className="text-xl">About Us</h1>
          <p className="mt-3 text-xl md:text-[56px] leading-snug">
            FashionSavvy helps make business easier!
          </p>
        </div>
      </div>
    </div>
  );
};
