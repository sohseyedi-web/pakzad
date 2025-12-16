import About from './_/components/About';
import Services from './_/components/Services';

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto lg:px-0 px-4">
      <About />
      <Services />
    </section>
  );
}
