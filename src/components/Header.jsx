import "boxicons/css/boxicons.min.css";
import { appConfig } from "../config";
import { socialLinks } from "../socialData";

const Header = () => {
  // toggle mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  const closeMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.add("hidden");
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        {socialLinks.title.title.split(" ")[0].toUpperCase()}
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        {appConfig.navigation.map((item, index) => (
          <a
            key={index}
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        Contact
      </button>

      {/* MOBILE */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* side bar mobile */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 left-0 bottom-0 right-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          {appConfig.navigation.map((item, index) => (
            <a
              key={index}
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href={item.href}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
