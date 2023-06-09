import { InstallmentPlan } from "@/components/screens/InstallmentPlan/InstallmentPlan";
import { NewsContent } from "@/components/screens/NewsContent/NewsContent";
import PagesActive from "@/components/screens/PagesActive/PagesActive";
import { SelectApartments } from "@/components/screens/SelectApartments/SelectApartments";
import Consultation from "@/components/screens/consultation/Consultation";
import Footer from "@/components/screens/footer/Footer";
import { Headers } from "@/components/screens/headers/Headers";
import Linecont from "@/components/screens/linecont/Linecont";
import { Wrapper } from "@/components/screens/wraper/Wraper";

export default function News() {
  return (
    <div>
      <Headers />

      <Wrapper>
        <PagesActive />
        <SelectApartments/>
        <Consultation title="Индивидуальная консультация" text="Наши специалисты подберут для Вас самые лучшие условия приобретения квартиры    всего за 10 минут" btns="Отправить"/>
        <InstallmentPlan/>
        <Linecont/>
        <NewsContent/>  
      </Wrapper>
      <Footer />
    </div>
  );
}
