import Navbar from "../../styles/css-modules/components/NavBar";
import { HeaderComposition } from "../../components/Header/src/components/pattern";
import BlogComposition from "../../components/Blog/src";
import FooterComposition from "../../styles/tailwind/Footer/src/pattern";

export default function Home() {
  return (
    <>
      <Navbar
        one={"Teams"}
        two={"Cep"}
        three={"Login"}
        four={"Pokemon"}
        buttonOne={"Button"}
        buttonTwo={"Button"}
      />
      <HeaderComposition />
      <BlogComposition />
      <FooterComposition />
    </>
  );
}