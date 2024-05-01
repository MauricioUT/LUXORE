import Wrapper from "@/components/layout/Wrapper";
import Home3 from "@/components/home-3/Home3";


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
    <Wrapper>
      <Home3 urlCategory="2"/>
    </Wrapper>    
  )
}
