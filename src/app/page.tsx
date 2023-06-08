import Consultation from "@/components/screens/consultation/Consultation";
import OurAdvatages from "@/components/screens/OurAdvantages/OurAdvantages";
import Aboutcomplex from "@/components/screens/aboutcomplex/aboutcomplex";
import Adres from "@/components/screens/adres/Adres";
import Apartments from "@/components/screens/apartments/Apartments";
import { AreaAdres } from "@/components/screens/areaaress/AreaAdres";
import { Contacts } from "@/components/screens/contacts/Contacts";
import { Develope } from "@/components/screens/develope/Develope";
import Footer from "@/components/screens/footer/Footer";
import Gelery from "@/components/screens/gelery/Gelery";
import { Headers } from "@/components/screens/headers/Headers";
import Linecont from "@/components/screens/linecont/Linecont";
import { PerfectApartment } from "@/components/screens/perfectApartment/PerfectApartment";
import { Wrapper } from "@/components/screens/wraper/Wraper";
import Apartment from "@/components/screens/Apartment/Apartment"; 

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
        <Apartment/>
        <Consultation btns="Отправить" title='Индивидуальная консультация' text='Наши специалисты подберут для Вас самые лучшие условия приобретения квартиры    всего за 10 минут' />
        <Linecont />
        <PerfectApartment />
        <AreaAdres />
        <Linecont />
        <Develope/>
        <Contacts/>
        <Consultation btns="Отправить заявку" title2='Оставьте заявку'/>
      </Wrapper>
      <Footer />  
    </div>
  );
}
