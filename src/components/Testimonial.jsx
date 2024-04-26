const TestimonialBox = ({ bgColor, text, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`bg-${bgColor} col-span-2 text-button-color text-center content-center p-4 w-[250px] h-[250px] rounded-md`}>
        <p>{text}</p>
      </div>
      <p className="font-bold py-3">{name}</p>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <>
      <div className=" bg-tetiary-color bg-opacity-[10%] p-5 py-[150px] flex flex-col gap-8 md:mt-40">
        <div className="flex flex-col text-center justify-center ">
          <p className=" font-bold  text-2xl text-primary-color poppins-regular md:text-4xl">
            Customer Testimonials
          </p>
          <p className="text-xs md:text-lg">
            This is what our users have to say!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          <TestimonialBox
            bgColor="primary-color"
            text="Finding fashionable clothing in plus sizes can be a challenge, 
            but this website has a fantastic selection! I've purchased several items 
            from their plus-size range and have been thrilled with the fit and quality 
            every time."
            name="Customer 1"
          />
          <TestimonialBox
            bgColor="primary-color"
            text="Each piece I've ordered has exceeded my expectations, and the
                  little touches like personalized thank you notes make me feel
                  like a valued customer."
            name="Customer 2"
          />
          <TestimonialBox
            bgColor="primary-color"
            text="As someone who shops online frequently, I really appreciate
                  how quickly my orders arrive from this website.."
            name="Customer 3"
          />
          <TestimonialBox
            bgColor="primary-color"
            text="The variety of styles is amazing, and the prices are so
                  affordable. I've ordered multiple times and have never been
                  disappointed."
            name="Customer 4"
          />
        </div>
      </div>
    </>
  );
};
