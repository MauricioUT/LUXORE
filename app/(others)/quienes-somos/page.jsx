import dynamic from "next/dynamic";
import AboutUs from "@/components/about-us";

export const metadata = {
  title: 'Quienes somos',
  description:
    'En Luxore estamos de tu lado cuidando siempre de tus intereses',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
