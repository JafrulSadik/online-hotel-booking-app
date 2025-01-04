import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function AuthRootLayout({ children, params }) {
  const {lang} = params;
  return (
    <div className="bg-gray-50">
      <Navbar authPage={true} lang={lang}/>
      {children}
      <Footer authpage={true}/>
    </div>
  );
}
