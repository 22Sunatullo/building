'use client';
import style from './MobileSlider.module.scss'

interface MobileCard {
    image: string
}

export const MobileSlider = ({ image }: MobileCard) => {
    return (
        <div className={style.allSlider}> 
            <div className={style.sliderMob} style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className={style.titleMob}>
                <h2>Концеп Жилого Комплекса</h2>
                <p>Здесь собраны концепты жк, показаны блоки ЖК а так же много других фотографий </p>
            </div>
        </div>
    )
}
