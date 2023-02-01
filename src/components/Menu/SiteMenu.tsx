import Link from 'next/link'
import React from 'react'
import Search from '../pageParts/Search/Search'
import classes from "./menu.module.scss"

export default function SiteMenu({withSearch}:{withSearch : boolean}) {
  return (
    <div className={classes.site_menu}>
        {withSearch ? <Search/> : null}
        <nav className={classes.navigation}>
          <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about_project">About Project</Link>
            </li>
            <li>
                <Link href="/category">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}
