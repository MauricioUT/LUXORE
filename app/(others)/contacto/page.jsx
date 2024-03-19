import dynamic from "next/dynamic";
import Contact from "@/components/contact";
import Wrapper from "@/components/layout/Wrapper";

export const metadata = {
  title: 'Contacto',
  description:
    'Déjanos tus datos y te asesoramos',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
