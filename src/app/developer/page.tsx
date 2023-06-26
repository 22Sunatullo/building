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
        <ResidentialComplex />
        <Linecont />
        <Develope title="О компании" coment="ООО «Сохтмони Осиёи Маркази» реализует строительство многофункционального жилого комплекса «82-TOWERS». 
          За годы работы компания заслужила репутацию профессионала и надежного партнера в сфере строительства и управления проектами любой сложности.
          Мы даем людям уверенность и надежность, мы делаем их жизнь лучше, помогая реализовывать устремления и мечты. Мы дорожим своей репутацией, поэтому основные ориентиры в нашей работе — это безопасность и качество."/>
        <SoctialMedium />
        <Linecont />
        <InstallmentPlan />
        <Linecont />
        <NewsForPage />
        <Linecont />
        <SelectApartments />
        <Consultation btns="Отправить" title='Индивидуальная консультация' text='Наши специалисты подберут для Вас самые лучшие условия приобретения квартиры    всего за 10 минут' />
      </Wrapper>
    </div>
  );
}
