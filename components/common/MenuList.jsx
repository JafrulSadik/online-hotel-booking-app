import MenuItem from "./MenuItem";

const MenuList = ({ lang, user, handleSignOut, onShowMenu }) => {
  if (!user) {
    return (
      <ul>
        <MenuItem
          href={`/${lang}/login`}
          label="Login"
          onShowMenu={onShowMenu}
        />
        <MenuItem
          href={`/${lang}/register`}
          label="Signup"
          onShowMenu={onShowMenu}
        />
      </ul>
    );
  }

  return (
    <ul>
      <MenuItem href={`/${lang}`} label={user.name} onShowMenu={onShowMenu} />
      <MenuItem
        href={`/${lang}/user/manage-hotels/create`}
        label="Create Hotel"
        onShowMenu={onShowMenu}
      />
      <MenuItem
        href={`/${lang}/user/manage-hotels`}
        label="Manage Hotels"
        onShowMenu={onShowMenu}
      />
      <MenuItem
        href={`/${lang}/user/bookings`}
        label="Bookings"
        onShowMenu={onShowMenu}
      />
      <MenuItem href="#" label="Help" />
      <li>
        <button
          onClick={handleSignOut}
          className="w-full bg-gray-100 rounded-b-md px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
        >
          Logout
        </button>
      </li>
    </ul>
  );
};

export default MenuList;
