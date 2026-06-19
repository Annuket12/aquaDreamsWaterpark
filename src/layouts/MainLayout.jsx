import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollTopButton from "../components/ScrollTopButton";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsApp />
      <ScrollTopButton />
    </>
  );
}