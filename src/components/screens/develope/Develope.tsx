import React from 'react'
import { Card2 } from './card2/Card2'
import { Card1 } from './card1/Card1'

import style from './Develope.module.scss'

export const Develope = () => {
  return (
    <div className={style.develope}>
        <Card2/>
        <Card1/>
    </div>
  )
}
