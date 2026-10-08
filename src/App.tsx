import { Layout } from "@/components/layout/Layout";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { BootLog } from "@/components/sections/Stats";
import { WhoAmI } from "@/components/sections/WhoAmI";
import { Work } from "@/components/sections/Work";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <Layout>
      <Nav />

      <main>
        <Hero />
        <BootLog />
        <WhoAmI />
        <Work />
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
}