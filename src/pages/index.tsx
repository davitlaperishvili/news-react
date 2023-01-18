import getPosts from '@/server/GetNews'
import MainContainer from 'layouts/MainContainer/MainContainer'
import PageWrapper from 'layouts/PageWrapper'
import { useEffect } from 'react'

export default function Home() {
  useEffect( () => {
    (async function () {
      console.log(await getPosts("bitcoin"))
    })()
  })
  return (
    <PageWrapper>
      <MainContainer>
        <h1>Index Page changed</h1>
      </MainContainer>
    </PageWrapper>
  )
}
