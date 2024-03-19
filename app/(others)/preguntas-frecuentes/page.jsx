import dynamic from "next/dynamic";
import Faq from "@/components/faq";

export const metadata = {
  title: 'preguntas frecuentes',
  description:
    'preguntas-frecuentes',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
