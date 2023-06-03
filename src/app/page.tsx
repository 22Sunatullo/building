import OurAdvatages from "./components/screens/OurAdvantages/OurAdvantages";
import Aboutcomplex from "./components/screens/aboutcomplex/aboutcomplex";
import Adres from "./components/screens/adres/Adres";
import Apartments from "./components/screens/apartments/Apartments";
import Footer from "./components/screens/footer/Footer";
import { Headers } from "./components/screens/headers/Headers";
import Linecont from "./components/screens/linecont/Linecont";
import { Wrapper } from "./components/screens/wraper/Wraper";

export default function Home() {
  return (
    <div>
      <Headers />
      <Apartments />
      <Wrapper>
        <Aboutcomplex />
        <Linecont />
        <Adres />
        <Linecont />
        <OurAdvatages />
        <Linecont />    
      </Wrapper>
      <Footer/>
    </div>
  );
}
