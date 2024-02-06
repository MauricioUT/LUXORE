import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-3/page'

export const metadata = {
  title: 'Luxore - Capital                      ',
  description:
  'Desarrollador inmobiliario especializado en la venta de bienes raíces. ',
}

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
    </Wrapper>
    
  )
}
