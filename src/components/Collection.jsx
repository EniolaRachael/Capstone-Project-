import Outfit1 from '../assets/savvy assets/HomePage/Outfit1.png';
import Outfit2 from '../assets/savvy assets/HomePage/Outfit2.png';
import Outfit3 from '../assets/savvy assets/HomePage/Outfit3.png';
import Outfit4 from '../assets/savvy assets/HomePage/Outfit4.png';
import Outfit5 from '../assets/savvy assets/HomePage/Outfit5.png';
import Outfit6 from '../assets/savvy assets/HomePage/Outfit6.png';

export const Collection = () => {
  function Outfit(props) {
    return (
      <div className="flex flex-col items-center p-5">
        <div className="w-[230px]">
          <img
            src={props.imageSource}
            alt=""
          />
        </div>
        <p>{props.location}</p>
        <p>{props.category}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center py-[100px]">
      <h1 className="text-[#1B0072] md:text-4xl font-bold">
        Explore Collections
      </h1>
      <p className="font-lighter text-sm">
        We have many styles that you can explore
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full items-center justify-center mt-20 text-[#1B0072]">
        <Outfit
          imageSource={Outfit1}
          location="Asante Beach"
          category="Ladies' Wear"
        />
        <Outfit
          imageSource={Outfit2}
          location="Asante Beach"
          category="Ladies' Wear"
        />
        <Outfit
          imageSource={Outfit3}
          location="Asante Beach"
          category="Ladies' Wear"
        />
        <Outfit
          imageSource={Outfit4}
          location="Asante Beach"
          category="Ladies' Wear"
        />
        <Outfit
          imageSource={Outfit5}
          location="Asante Beach"
          category="Ladies' Wear"
        />
        <Outfit
          imageSource={Outfit6}
          location="Asante Beach"
          category="Ladies' Wear"
        />
      </div>
    </div>
  );
};
