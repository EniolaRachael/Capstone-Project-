import HeaderLogo from '../assets/savvy assets/HomePage/HeaderLogo.svg';
import menu from '../assets/menu.svg';
export const Header = () => {
  return (
    <div className="p-5   text-primary-color text-sm bg-button-color md:mx-10  ">
      <div className="flex justify-between gap-20 w-[100%]">
        <div className="flex md:justify-between md:w-[100%] md:items-center">
          <img
            className="w-20 px-1"
            src={HeaderLogo}
            alt=""
          />
          <nav className="hidden md:block">
            <ul className=" flex  gap-10 ">
              <li>
                <a
                  href=""
                  className="hover:text-primary-color hover:opacity-60">
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-primary-color hover:opacity-60">
                  Shop
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-primary-color hover:opacity-60">
                  Account
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-primary-color hover:opacity-60">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-primary-color hover:opacity-60">
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <a href="">Account</a>
            <a href="">Cart</a>
          </div>
        </div>

        <div className="justify-between gap-4 flex px-14 md:hidden ">
          <div className="py-4">
            <button className=" rounded-lg border-2 border-tetiary-color h-8 ">
              <span className="p-5 font-bold ">Cart</span>
            </button>
          </div>
          <img
            className="w-7 text-primary-color"
            src={menu}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
