import dynamic from "next/dynamic";
import HowSafe from "@/components/how-safe";

export const metadata = {
  title: '¿Qué tan seguros son?',
  description:
  'informacion de que son tan seguras son las bienes raices',
}

const index = () => {
  return (
    <>
      <HowSafe />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
