import Wrapper from "@/components/layout/Wrapper";
import Home3 from "@/components/home-3/Home3";
import Contact from "@/components/contact";
import RealState from "@/components/services/real-state";
import Thanks from "@/components/thanks";
import HowWork from "@/components/how-work";
import GoalAttemp from "@/components/services/goal-attempt";
import Faq from "@/components/faq";
import WhatAre from "@/components/what-are";
import HowSafe from "@/components/how-safe";
import AboutUs from "@/components/about-us";

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
      <Home3/>
      <Contact />
      <RealState />
      <Thanks />
      <HowWork />
      <GoalAttemp />
      <Faq />
      <WhatAre />
      <HowSafe />
      <AboutUs />
    </Wrapper>    
  )
}
