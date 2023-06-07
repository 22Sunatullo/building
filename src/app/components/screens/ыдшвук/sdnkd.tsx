import classes from './instagram-slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IInstagram } from '@models/IInstagram'
import { InstagramCard } from '@components/Instagram/InstagramCard'
import 'swiper/css'
import { HandySvg } from 'handy-svg'
import { Navigation, Pagination } from 'swiper'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  posts: IInstagram[]
}

function InstagramSlider({posts}: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  let prevId = 'instagram-nav-prev'
  let nextId = 'instagram-nav-next'
  let paginationId = 'instagram-pagination'

  return (
    <div>
      <Swiper
        className={classes.swiper}
        slidesPerView="auto"
        spaceBetween={16}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: `#${prevId}`,
          nextEl: `#${nextId}`,
          enabled: true,
        }}
        pagination={{
          el: `#${paginationId}`,
          enabled: true,
          clickable: true,
          bulletClass: classes.bullet,
          bulletActiveClass: classes.bulletActive,
        }}
        breakpoints={{
          480: {
            spaceBetween: 28,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: false,
          },
          1360: {
            slidesPerView: 3,
            spaceBetween: 48,
            centeredSlides: false,
          }
        }}
        autoHeight
        onAfterInit={(swiper) => {
          setActiveIndex(swiper.activeIndex)
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex)
        }}
        initialSlide={activeIndex}
      >
        {posts.map((post, index) => (
          <SwiperSlide
            key={post.id}
            className={classes.slide}
          >
            <InstagramCard
              className={clsx(activeIndex === index && classes.active)}
              {...post}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={clsx(classes.bottom, posts.length < 4 && classes.hide)}>
        <div className={classes.pagination} id={paginationId}/>
        <div className={classes.navigation}>
          <button
            id={prevId}
            className={classes.prev}
          >
            <HandySvg
              src="/assets/icons/arrow-left.svg"
              width={24}
              height={24}
            />
          </button>
          <button
            id={nextId}
            className={classes.next}
          >
            <HandySvg
              src="/assets/icons/arrow-right.svg"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export { InstagramSlider }