import MainContainer from '../../layouts/MainContainer/MainContainer'
import React from 'react'
import Link from 'next/link'
import classes from "./header.module.scss"
import Search from '@/components/pageParts/Search/Search'
import SiteMenu from '@/components/Menu/SiteMenu'

export default function Header() {
  return (
    <header className={`${classes.main_header} trans-all-4`}>
      <MainContainer>
        <div className={classes.header_wrap}>
          <div className={classes.logo}>
            <Link href="/">
              <img src="/logo.png" alt="" />
            </Link>
          </div>
          <SiteMenu withSearch={true}/>
        </div>
      </MainContainer>
    </header>
  )
}
