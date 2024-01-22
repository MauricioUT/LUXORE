import dynamic from "next/dynamic";
import Faq from "@/components/faq";

export const metadata = {
  title: 'preguntas frecuentes',
  description:
    'preguntas-frecuentes',
}

const index = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
