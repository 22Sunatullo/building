import React from 'react'
import { Card2 } from './card2/Card2'
import { Card1 } from './card1/Card1'

import style from './Develope.module.scss'

interface DevelopeCont{
  title: string,
  coment: string
}

export const Develope = ({title,coment}:DevelopeCont) => {
  return (
    <div className={style.develope}>
        <Card2 title={title} coment={coment}/>
        <Card1/>
    </div>
  )
}
