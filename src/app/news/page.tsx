import { NewsContent } from "@/components/screens/NewsContent/NewsContent";
import PagesActive from "@/components/screens/PagesActive/PagesActive";
import Footer from "@/components/screens/footer/Footer";
import { Headers } from "@/components/screens/headers/Headers";
import { Wrapper } from "@/components/screens/wraper/Wraper";

export default function News() {
  return (
    <div>
      <Wrapper>
        <Headers />
        <PagesActive/>
        <NewsContent/>
      </Wrapper>
      <Footer/>
    </div>
  );
}
