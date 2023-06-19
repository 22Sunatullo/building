import { InstallmentPlan } from "@/components/screens/InstallmentPlan/InstallmentPlan";
import { NewsForPage } from "@/components/screens/NewsForPage/NewsForPage";
import { ResidentialComplex } from "@/components/screens/ResidentialComplex/ResidentialComplex";
import { SelectApartments } from "@/components/screens/SelectApartments/SelectApartments";
import { AreaAdres } from "@/components/screens/areaaress/AreaAdres";
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
        <AreaAdres/>
        <InstallmentPlan/>
        <Linecont/>
        <NewsForPage/>
        <Linecont/>
        <SelectApartments/>
      </Wrapper>
    </div>
  );
}
