import dynamic from "next/dynamic";
import RealState from "@/components/services/real-state";

export const metadata = {
  title: 'Agencia inmobiliaria',
  description:
  'LUXORE te brinda la solución a tus necesidades y maximisa tu inversión',
}

const index = () => {
  return (
    <>
      <RealState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });