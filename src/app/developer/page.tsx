import { InstallmentPlan } from "@/components/screens/InstallmentPlan/InstallmentPlan";
import { NewsForPage } from "@/components/screens/NewsForPage/NewsForPage";
import { ResidentialComplex } from "@/components/screens/ResidentialComplex/ResidentialComplex";
import { SelectApartments } from "@/components/screens/SelectApartments/SelectApartments";
import { SoctialMedium } from "@/components/screens/SoctialMedium/SoctialMedium";
import Consultation from "@/components/screens/consultation/Consultation";
import { Develope } from "@/components/screens/develope/Develope";
import Linecont from "@/components/screens/linecont/Linecont";
import { Wrapper } from "@/components/screens/wraper/Wraper";

export default function News() {
  return (
    <div>
      <Wrapper>
        <ResidentialComplex/>
        <Linecont/>
        <Develope/>
        <SoctialMedium/>
        <Linecont/>
        <InstallmentPlan/>
        <Linecont/>
        <NewsForPage/>
        <Linecont/>
        <SelectApartments/>
        <Consultation btns="Отправить" title='Индивидуальная консультация' text='Наши специалисты подберут для Вас самые лучшие условия приобретения квартиры    всего за 10 минут'/>
      </Wrapper>
    </div>
  );
}
