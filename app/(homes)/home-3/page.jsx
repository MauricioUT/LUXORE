import dynamic from "next/dynamic";
import HomeMain from "@/components/home-3/Home3";

export const metadata = {
  title: 'Inicio',
  description:
    'Inicio - Bienes raices',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>

      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
