import dynamic from "next/dynamic";
import Thanks from "@/components/thanks";

export const metadata = {
  title: 'Agradecimientos',
  description: 'Agradecimientos por parte de luxore capitalß',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      <Thanks />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
