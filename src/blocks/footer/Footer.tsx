import MainContainer from '../../layouts/MainContainer/MainContainer'
import React from 'react'
import classes from "./footer.module.scss"
import Link from 'next/link'

export default function Footer() {
  return (
    
      <footer className={classes.main_footer}>
        <MainContainer>
          <div className={classes.main_footer_wrap}>
            <div className={classes.logo}>
              <Link href="/">
                <img src="/logo.png" alt="" />
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
                    <li>
                        <Link href="/category">Categories</Link>
                    </li>
                  </ul>
                </nav>
              </div>
          </div>
        </MainContainer>
      </footer>
  )
}
