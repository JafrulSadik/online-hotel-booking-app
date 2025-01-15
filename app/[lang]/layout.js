import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Hotel Booking - Home",
};

export default async function HomeRootLayout({ children,modal, params }) {
  const {lang} = params;
  return (
    <>
        <SessionProvider>
          <Navbar lang={lang}/>
        </SessionProvider>
        {modal}
        {children}
        <Footer/>
    </>
  );
}
