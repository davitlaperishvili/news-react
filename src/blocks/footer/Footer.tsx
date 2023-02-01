import MainContainer from '../../layouts/MainContainer/MainContainer'
import React from 'react'
import classes from "./footer.module.scss"
import Link from 'next/link'
import SiteMenu from '@/components/Menu/SiteMenu'

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
            <SiteMenu withSearch={false}/>
          </div>
        </MainContainer>
      </footer>
  )
}
