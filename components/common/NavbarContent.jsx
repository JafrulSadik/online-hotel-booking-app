import Menus from "./Menus";
import Search from "./Search";

const NavbarContent = ({ authPage, lang }) => {
  if (authPage) return null;
  return (
    <>
      <Search />
      <Menus lang={lang} />
    </>
  );
};

export default NavbarContent;
