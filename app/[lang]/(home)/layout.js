import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default async function HomeRootLayout({ children, params }) {
  const {lang} = params;
  return (
    <>
        <Navbar lang={lang}/>
        {children}
        <Footer/>
    </>
  );
}
