import dynamic from "next/dynamic";
import HowWork from "@/components/how-work";

export const metadata = {
  title: '¿Cómo funcionan?',
  description:
    'Cómo funciona la compra y venta de bienes raíces',
}

const index = () => {
  return (
    <>
      <HowWork />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
