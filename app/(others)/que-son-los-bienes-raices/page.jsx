import dynamic from "next/dynamic";
import WhatAre from "@/components/what-are";

export const metadata = {
  title: '¿Qué son los bienes raíces?',
}

const index = () => {
  return (
    <>
      <WhatAre />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
