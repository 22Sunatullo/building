import Aboutcomplex from "./components/screens/aboutcomplex/aboutcomplex";
import Adres from "./components/screens/adres/Adres";
import Apartments from "./components/screens/apartments/Apartments";
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
      </Wrapper>
    </div>
  );
}
