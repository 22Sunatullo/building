export interface IApartament {
  id: number;
  title: string;
  img: string;
  square: string;
  floor: string;
  block: string;
}

export  interface IApartmentCategory {
  id: number
  name: string
  apartments: IApartament[]
}

export const ApartmentCategories: IApartmentCategory[] = [
    {
      id: 1,
      name:'Все квартиры',
      apartments: [
        {
          id: 1,
          title: "1-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "1850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 2,
          title: "2-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "2650 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 3,
          title: "1-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "1850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 4,
          title: "5-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "4850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 5,
          title: "2-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "2650 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 6,
          title: "3-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "3850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 7,
          title: "3-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "3850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 8,
          title: "3-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "3850 м2",
          floor: "4, 1",
          block: "1",
        },

      ]
    },
    {
      id: 2,
      name:'1-комнатная',
      apartments: [
        {
          id: 1,
          title: "1-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "1850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 2,
          title: "1-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "1850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 3,
          title: "1-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "1850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 4,
          title: "1-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "1850 м2",
          floor: "4, 1",
          block: "1",
        },
      ]
    },
    {
      id: 3,
      name:'2-комнатная',
      apartments: [
        {
          id: 1,
          title: "2-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "2650 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 2,
          title: "2-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "2650 м2",
          floor: "4, 1",
          block: "1",
        },
      ]
    },
    {
      id: 4,
      name:'3-комнатная',
      apartments: [
        {
          id: 1,
          title: "3-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "3850 м2",
          floor: "4, 1",
          block: "1",
        },
        {
          id: 2,
          title: "3-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "3850 м2",
          floor: "4, 1",
          block: "1",
        },
      ]
    },
    {
      id: 5,
      name:'+4',
      apartments: [
        {
          id: 8,
          title: "5-комнатная квартира",
          img: "assets/apartment/image.svg",
          square: "4850 м2",
          floor: "4, 1",
          block: "1",
        },
      ]
    },
]
