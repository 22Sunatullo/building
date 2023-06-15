interface IData {
  id: number;
  title: string;
  image: any;
  linkTitle: string;
  link: string;
}

const Data: IData[] = [
  {
    id: 1,
    image: "/assets/contactlogo/Email.png",
    title: "Почта",
    linkTitle: "hello@relume.io",
    link: "mailto:hello@relume.io",
  },
  {
    id: 2,
    image: "/assets/contactlogo/Phone.png",
    title: "Телефон",
    linkTitle: "+1 (555) 000-0000",
    link: "tel:+1 (555) 000-0000",
  },
  {
    id: 3,
    image: "/assets/contactlogo/Email.png",
    title: "Instagram",
    linkTitle: "hello@relume.io",
    link: "hello@relume.io",
  },
  {
    id: 4,
    image: "/assets/contactlogo/Email.png",
    title: "Facebook",
    linkTitle: "hello@relume.io",
    link: "mailto:hello@relume.io",
  },
  {
    id: 5,
    image: "/assets/contactlogo/Pin.png",
    title: "Отдел продаж",
    linkTitle: "Астана, проспект Туран, 57/3",
    link: "Астана, проспект Туран, 57/3",
  },
];

export default Data;
