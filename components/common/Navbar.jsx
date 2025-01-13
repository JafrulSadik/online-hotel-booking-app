import NavbarContent from "./NavbarContent";
import NavLogoSection from "./NavLogoSection";

const Navbar = async ({ authPage, lang }) => {
  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <NavLogoSection lang={lang} />
      <NavbarContent lang={lang} authPage={authPage} />
    </nav>
  );
};

export default Navbar;
