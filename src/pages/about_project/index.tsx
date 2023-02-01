import MainContainer from '../../layouts/MainContainer/MainContainer'
import PageWrapper from '../../layouts/PageWrapper'
import React from 'react'
import PageTitle from '@/components/pageParts/PageTitle'
import classes from "./about_us.module.scss"
export default function AboutProject() {
  return (
    <>
    <PageWrapper>
      <MainContainer>
        <PageTitle title="About Us"/>
        <div className={classes.about_us_wrap}>
            <h2>Test Project!!!</h2>
            <br />
            <br />
            <div className={classes.about_us_content}>I am learning ReactJs / NextJs / TypeScript</div>
        </div>
      </MainContainer>
    </PageWrapper>
    </>
  )
}
