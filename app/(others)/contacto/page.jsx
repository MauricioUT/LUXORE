import dynamic from "next/dynamic";
import Contact from "@/components/contact";

export const metadata = {
  title: 'Contacto',
  description:
    'Déjanos tus datos y te asesoramos',
  robots: {
    index: true,
    follow: true
  }
}

const index = () => {
  return (
    <>
      {/* <Contact /> */}

      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Hola
        </a>
        .
      </h4>
    </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
