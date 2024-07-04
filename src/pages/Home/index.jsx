import Navbar from "../../styles/css-modules/components/NavBar";
import { HeaderComposition } from "../../components/Header/src/components/pattern";
import BlogComposition from "../../components/Blog/src";
import FooterComposition from "../../styles/tailwind/Footer/src/pattern";

export default function Home() {
  return (
    <main className="bg-[#FFEBB7]">
      <Navbar
        one="Teams"
        two="Cep"
        three="Pokemon"
        four="About"
        five="More"
        buttonOne="Sing up"
        buttonTwo="Login"
      />
      <HeaderComposition />
      <BlogComposition />
      <FooterComposition />
    </main>
  );
}