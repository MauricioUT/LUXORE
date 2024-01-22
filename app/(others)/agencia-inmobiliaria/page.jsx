import dynamic from "next/dynamic";
import RealState from "@/components/services/real-state";

export const metadata = {
  title: 'Nuestros servicios',
}

const index = () => {
  return (
    <>
      <RealState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
