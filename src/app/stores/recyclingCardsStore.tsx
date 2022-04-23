import recyclingPlaceImg from "../../assets/recycling-place.png";

export interface RecyclingCard {
    id?: number,
    image: any,
    address: string,
    fullAddress?: string
    phone?: string,
    description: string,
    timetable?: string[],
    shop?: string,
    items?: string[]
}

export const RecyclingCards: Array<RecyclingCard> = [
    {
        id: 1,
        image: recyclingPlaceImg,
        address: 'ул.Кремлёвская, 88',
        fullAddress: 'Казань, Кремлёвская, 88',
        phone: '+7 (917) 888 88 88',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
        shop: 'H&M',
        items: ['Пластик: от 5 кг', 'Стекло: от 2 кг', 'Стекло: от 2 кг']
    },
    {
        id: 2,
        image: recyclingPlaceImg,
        address: 'ул.Кремлёвская, 35',
        fullAddress: 'Казань, Кремлёвская, 35',
        phone: '+7 (917) 355 35 35',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
        shop: 'H&M',
        items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
    },
    {
        id: 3,
        image: recyclingPlaceImg,
        address: 'ул.Кремлёвская, 21',
        fullAddress: 'Казань, Кремлёвская, 21',
        phone: '+7 (917) 211 21 21',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
        shop: 'H&M',
        items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
    },
]