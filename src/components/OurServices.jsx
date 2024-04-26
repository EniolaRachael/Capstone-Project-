import Pic1 from '../assets/Pic1.png';
import Pic2 from '../assets/Pic2.png';
import Pic3 from '../assets/Pic3.png';
import Pic4 from '../assets/Pic4.png';
import Pic5 from '../assets/Pic5.png';

function ImageWithText(props) {
  return (
    <div className="flex flex-col items-center w-40 gap-5">
      <img
        className="w-40"
        src={props.imageSource}
        alt=""
      />
      <p className="text-sm font-bold">{props.text}</p>
    </div>
  );
}

export const OurServices = () => {
  return (
    <div className="m-5">
      <div className="p-10 flex justify-between md:px-[200px] ">
        <p className="font-bold text-xl md:text-4xl text-primary-color">
          Our Services
        </p>
        <button className="bg-tetiary-color p-2 cursor-pointer rounded-lg text-sm font-bold">
          <span className="p-3">SignUp Now</span>{' '}
        </button>
      </div>

      <div className="bg-tetiary-color grid grid-cols-2 p-3  md:grid-cols-5 justify-between md:p-[100px]">
        <ImageWithText
          imageSource={Pic1}
          text="Book keeping & documentation"
        />

        <ImageWithText
          imageSource={Pic2}
          text="Invoice Generator"
        />
        <ImageWithText
          imageSource={Pic3}
          text="Catalogue"
        />
        <ImageWithText
          imageSource={Pic4}
          text="Quality Assurance"
        />
        <ImageWithText
          imageSource={Pic5}
          text="Logistics"
        />
        {/* <hr className="rotate-90 border-0.5 p-3 py-4" /> */}
      </div>
    </div>
  );
};
