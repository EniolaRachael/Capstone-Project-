import FooterPic from '../../assets/FooterPic.png';

export const FooterTop = () => {
  return (
    <div className="bg-tetiary-color p-10 flex gap-10 justify-center items-center">
      <div>
        <img
          src={FooterPic}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="flex  font-bold text-primary-color poppins-regular text-xl md:text-4xl md:w-[550px] text-left leading-snug">
          Build a strong online presence, enhanced brand reputation, and
          sustainable growth
        </h1>
        <button className="rounded-md bg-button-color p-3 w-1/3 font-bold">
          Signup Now
        </button>
      </div>
    </div>
  );
};
