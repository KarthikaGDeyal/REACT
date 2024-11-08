import React from 'react'
import style from './Header.module.css'

function Header() {
    const username="Goutham"
  return (
    <div>
      <div className={style.div1}>
        <h1 className={style.profileTitle}>Hello,I'm {username}</h1>
      </div>
    </div>
  )
}

export default Header
