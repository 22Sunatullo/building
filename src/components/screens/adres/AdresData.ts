interface IData {
  id: number;
  title: string;
  adrestext: string;
  image: string;
}

const Data: IData[] = [
  {
    id: 1,
    title: "Адерс застройки",
    adrestext: "Нусратулло Махсум дом 75",
    image: '/assets/logo/Location.svg'
  },
  {
    id: 2,
    title: "Архитектура",
    adrestext: "Состоит из 5 блоков и 18-23 этажей",
    image: '/assets/logo/arhetictur.svg'
  },
  {
    id: 3,
    title: "Инфраструктура",
    adrestext: "Школы, дет. сады рядом и ТЦ",
    image: '/assets/logo/structure.svg'
  },
  {
    id: 4,
    title: "Безопасноть",
    adrestext: "Охраняемая территория",
    image: '/assets/logo/safe.svg'
  },
];

export default Data;
