import dynamic from "next/dynamic";
import NotFound from "@/components/404";

export const metadata = {
  title: 'pagina no encontrada',
  description:
    'pagina no encontrada',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: true });
