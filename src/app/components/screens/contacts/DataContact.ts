interface IData {
  id: number;
  title: string;
  image: any;
  link: string;
}

const Data: IData[] = [
  {
    id: 1,
    image: "/assets/contactlogo/Email.png",
    title: "Почта",
    link: "hello@relume.io",
  },
  {
    id: 2,
    image: "/assets/contactlogo/Phone.png",
    title: "Телефон",
    link: "+1 (555) 000-0000",
  },
  {
    id: 3,
    image: "/assets/contactlogo/Email.png",
    title: "Instagram",
    link: "hello@relume.io",
  },
  {
    id: 4,
    image: "/assets/contactlogo/Email.png",
    title: "Facebook",
    link: "hello@relume.io",
  },
  {
    id: 5,
    image: "/assets/contactlogo/Pin.png",
    title: "Отдел продаж",
    link: "Астана, проспект Туран, 57/3",
  },
];

export default Data;
