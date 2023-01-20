import MainContainer from '../../layouts/MainContainer/MainContainer'
import React from 'react'
import Link from 'next/link'
import classes from "./header.module.scss"

export default function Header() {
  return (
    <header className={`${classes.main_header} trans-all-4`}>
      <MainContainer>
        <div className={classes.header_wrap}>
          <div className={classes.logo}>
            <Link href="/">
              <img src="../logo.png" alt="" />
            </Link>
          </div>
          <div className={classes.site_menu}>
            <nav className={classes.navigation}>
              <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </MainContainer>
    </header>
  )
}
