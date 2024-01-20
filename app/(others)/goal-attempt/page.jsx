import dynamic from "next/dynamic";
import GoalAttemp from "@/components/services/goal-attempt";

export const metadata = {
  title: 'Remates hipotecarios',
}

const index = () => {
  return (
    <>
      <GoalAttemp />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
