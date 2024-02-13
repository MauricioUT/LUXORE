import dynamic from "next/dynamic";
import Contact from "@/components/contact";

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
    <>
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
