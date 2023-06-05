import OurAdvatages from "./components/screens/OurAdvantages/OurAdvantages";
import Aboutcomplex from "./components/screens/aboutcomplex/aboutcomplex";
import Adres from "./components/screens/adres/Adres";
import Apartments from "./components/screens/apartments/Apartments";
import { AreaAdres } from "./components/screens/areaaress/AreaAdres";
import { Develope } from "./components/screens/develope/Develope";
import Footer from "./components/screens/footer/Footer";
import Gelery from "./components/screens/gelery/Gelery";
import { Headers } from "./components/screens/headers/Headers";
import Linecont from "./components/screens/linecont/Linecont";
import { PerfectApartment } from "./components/screens/perfectApartment/PerfectApartment";
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
        <Gelery />
        <Linecont />
        <PerfectApartment />
        <AreaAdres />
        <Linecont />
        <Develope/>
      </Wrapper>
      <Footer />
    </div>
  );
}
