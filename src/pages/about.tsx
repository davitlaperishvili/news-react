import MainContainer from '../layouts/MainContainer/MainContainer'
import PageWrapper from '../layouts/PageWrapper'
import React from 'react'
import PageTitle from '@/components/pageParts/PageTitle'
export default function about() {
  return (
    <>
    <PageWrapper>
      <MainContainer>
        <PageTitle title="About Us"/>
      </MainContainer>
    </PageWrapper>
    </>
  )
}
