import Profile from "@/public/assets/profile/avatar.png";
import Image from "next/image";

const ProfileImgDemo = ({ height, width }) => {
  return (
    <Image
      src={Profile}
      height={100}
      width={100}
      alt="User avatar"
      className="rounded-full w-full h-full object-cover"
    />
  );
};

export default ProfileImgDemo;
