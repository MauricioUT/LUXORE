import dynamic from "next/dynamic";
import GoalAttemp from "@/components/services/goal-attempt";

export const metadata = {
  title: 'invierte en remates hipotecarios',
  description:
    'LUXORE te brinda la solución a tus problemas de inversión',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      <GoalAttemp />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
