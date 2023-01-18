import Footer from "../blocks/footer/Footer";
import Header from "../blocks/header/Header";

type PageWrapperProps = {
  children: React.ReactNode; // 👈️ type children
};
export default function PageWrapper(props: PageWrapperProps) {
  
  return (
    <main className="page_wrapper">
      <Header/>
      {props.children}
      <Footer/>
    </main>
  )
}

