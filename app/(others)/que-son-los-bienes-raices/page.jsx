import dynamic from "next/dynamic";
import WhatAre from "@/components/what-are";

export const metadata = {
  title: 'Qué son los bienes raíces',
  description:
    'informacion de que son las bienes raices',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      <WhatAre />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
