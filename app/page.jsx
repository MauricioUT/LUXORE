import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-3/page'
import Contact from "@/components/contact";

export const metadata = {
  title: 'Luxore - Capital                      ',
  description:
  'Desarrollador inmobiliario especializado en la venta de bienes raíces. ',
  robots:{
    index: true,
    follow: true
  }
}

export default function Home() {
  return (
    <>
     <HomeMain/>
     <Contact/>
     {/* <Wrapper>
        <HomeMain/>
        </Wrapper>
            */}
    </>


  
    
  )
}
