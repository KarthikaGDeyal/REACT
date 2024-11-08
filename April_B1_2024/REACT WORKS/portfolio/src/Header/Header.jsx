import React from 'react'
import style from './Header.module.css'

function Header() {
    const Username="Goutham"
  return (
    <div>
      <h1 className={style.profileTitle}>
        Hello,I'm {Username}
      </h1>
      <div className={style.div1}>
        </div>
      
    </div>
  )
}

export default Header
