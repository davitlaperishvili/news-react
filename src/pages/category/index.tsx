import CategoriesList from '@/components/Categories/CategoriesList'
import PageTitle from '@/components/pageParts/PageTitle'
import MainContainer from '@/layouts/MainContainer/MainContainer'
import PageWrapper from '@/layouts/PageWrapper'
import React from 'react'

export default function index() {
  return (
    <>
    <PageWrapper>
      <MainContainer>
        <PageTitle title="Choose Category"/>
        <CategoriesList />
      </MainContainer>
    </PageWrapper>
    </>
  )
}
