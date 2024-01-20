import dynamic from "next/dynamic";
import HowWork from "@/components/how-work";

export const metadata = {
  title: 'como funcionan',
}

const index = () => {
  return (
    <>
      <HowWork />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
