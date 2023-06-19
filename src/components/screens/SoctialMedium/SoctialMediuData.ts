interface IData {
    id: number;
    title: string;
    adrestext: string;
    image: string
  }
  
  const Data: IData[] = [
    {
      id: 1,
      title: "Номер телефона",
      adrestext: "+992 900 00 00 00",
      image: '/assets/logo/phonegold.png'
    },
    {
      id: 2,
      title: "Почта",
      adrestext: "example@gmail.com",
      image: '/assets/logo/Emailgold.png'
    },
    {
      id: 3,
      title: "Instagram",
      adrestext: "Stroika@",
      image: '/assets/logo/instagramgold.png'
    },
    {
      id: 4,
      title: "Facebook",
      adrestext: "Stroika@",
      image: '/assets/logo/facegold.png'
    },
  ];
  
  export default Data;
  