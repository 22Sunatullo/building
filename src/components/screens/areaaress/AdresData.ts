interface IData {
  id: number;
  title: string;
  adrestext: string;
  image: string
}

const Data: IData[] = [
  {
    id: 1,
    title: "Престижный район",
    adrestext: "82 мкр рядом с кольцевой",
    image: '/assets/areaadres/first.svg'
  },
  {
    id: 2,
    title: "Первая линия",
    adrestext: "Высокая проходимость людей",
    image: '/assets/areaadres/second.svg'
  },
  {
    id: 3,
    title: "Парковочные места",
    adrestext: "Парковочные места на 149 машин",
    image: '/assets/areaadres/third.svg'
  },
  {
    id: 4,
    title: "Высокие потолки",
    adrestext: "Потолки высотой 4 метра",
    image: '/assets/areaadres/for.svg'
  },
];

export default Data;
