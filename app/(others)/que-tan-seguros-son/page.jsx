import dynamic from "next/dynamic";
import HowSafe from "@/components/how-safe";

export const metadata = {
  title: '¿Qué tan seguros son?',
}

const index = () => {
  return (
    <>
      <HowSafe />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
