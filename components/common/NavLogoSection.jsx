import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const NavLogoSection = ({ lang }) => {
  return (
    <div className="flex items-center">
      <Link href={`/${lang}`}>
        <Image
          src={Logo}
          alt="Hotel Logo"
          className="h-8 w-auto"
          height={100}
          width={200}
        />
      </Link>
    </div>
  );
};

export default NavLogoSection;
