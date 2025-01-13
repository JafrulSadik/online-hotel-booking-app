import Image from "next/image";
import { FaUser } from "react-icons/fa6";

const NavProfileImage = ({ userImage }) => {
  return userImage ? (
    <Image
      src={userImage}
      height={20}
      width={20}
      className="h-6 w-6 rounded-full"
      alt="User Image"
    />
  ) : (
    <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
      <FaUser className="text-white" />
    </span>
  );
};

export default NavProfileImage;
