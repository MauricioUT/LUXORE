import dynamic from "next/dynamic";
import AboutUs from "@/components/about-us";

export const metadata = {
  title: 'Quienes somos',
}

const index = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
