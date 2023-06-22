interface IData {
  id: number;
  title: string;
  adrestext: string;
  image: string;
  link: string;
}

const Data: IData[] = [
  {
    id: 1,
    title: "Номер телефона",
    adrestext: "+992 900 00 00 00",
    image: "/assets/logo/phonegold.png",
    link: "tel:+992 900 00 00 00",
  },
  {
    id: 2,
    title: "Почта",
    adrestext: "example@gmail.com",
    image: "/assets/logo/Emailgold.png",
    link: "mailto:example@gmail.com",
  },
  {
    id: 3,
    title: "Instagram",
    adrestext: "Stroika@",
    image: "/assets/logo/instagramgold.png",
    link: "Stroika@",
  },
  {
    id: 4,
    title: "Facebook",
    adrestext: "Stroika@",
    image: "/assets/logo/facegold.png",
    link: "Stroika@",
  },
];

export default Data;
