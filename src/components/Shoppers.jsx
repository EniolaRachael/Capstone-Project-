const ShoppersProps = ({ number, text }) => {
  return (
    <div className="flex flex-col w-[300px] h-[150px] bg-[#3fe0d0] text-center justify-center font-bold text-[#1B1972] rounded-md">
      <p>Step {number}:</p>
      <p>{text}</p>
    </div>
  );
};

export const Shoppers = () => {
  return (
    <>
      <div className=" bg-button-color p-5 py-10 md:py-[150px] flex flex-col gap-8 w-full justify-center items-center">
        <div className="flex flex-col text-center justify-center ">
          <p className=" font-bold text-xl text-primary-color poppins-regular md:text-4xl">
            How it Works for Shoppers
          </p>
          <p className="text-xs px-4 py-1">
            Step-by-Step Guide on Using FashionSavvy as a customer/buyer
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <ShoppersProps
            number="01"
            text="Browse Catalogue"
          />
          <ShoppersProps
            number="02"
            text="Browse Catalogue"
          />
          <ShoppersProps
            number="03"
            text="Browse Catalogue"
          />
          <ShoppersProps
            number="04"
            text="Browse Catalogue"
          />
        </div>
        <div className="px-12 w-full">
          <hr />
        </div>
        <div className="flex flex-col text-center justify-center md:mt-[150px] ">
          <p className=" font-bold px-1 text-xl text-primary-color poppins-regular md:text-4xl">
            How it Works for Fashion Designers
          </p>
          <p className="text-xs px-9 py-1">
            Step-by-Step Guide on Using FashionSavvy as fashion designers/seller
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <ShoppersProps
            number="01"
            text="Upload Catalogue"
          />
          <ShoppersProps
            number="02"
            text="Add Style Info & Chart"
          />
          <ShoppersProps
            number="03"
            text="Sell live on website"
          />
          <ShoppersProps
            number="04"
            text="Receive Payment"
          />
        </div>
      </div>
    </>
  );
};
