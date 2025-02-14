import { ServiceCard } from "@/components/Services/ServiceCard";
import { ProductGrid } from "@/components/Shop/ProductGrid";
import TeamGrid from "@/components/Team/TeamGrid";
import { PromotionGrid } from "@/components/Promotions/PromotionGrid";
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/Header/Header";
import { GalleryGrid } from "@/components/Gallery/GalleryGrid";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Product } from "@/components/Shop/types";
import { About } from "@/components/About/About";

/* import { prisma } from "@/lib/prisma";
import {
  getGalleryImages,
  getProducts,
  getTeamMembers,
  getPromotions,
  getServices,
} from "@/lib/fetchers"; */

export default async function Home() {
  /* const sections = await prisma.sectionVisibility.findMany();
  const sectionsMap = sections.reduce((acc, section) => {
    acc[section.name] = section.active;
    return acc;
  }, {} as Record<string, boolean>); */

  /* const [images, products, members, promotions, services] = await Promise.all([
    getGalleryImages(),
    getProducts(),
    getTeamMembers(),
    getPromotions(),
    getServices(),
  ]);
 */
  /* const serializedProducts = (products || []).map((product: Product) => ({
    ...product,
    price: Number(product.price),
  }));

  const serializedServices = (services || []).map((service) => ({
    ...service,
    price: Number(service.price),
  })); */

  return (
    <main>
      <section id="home">
        <Header />
      </section>
      <Hero />
      {/* <section id="promotions">
        <PromotionGrid
          promotions={promotions}
          isVisible={sectionsMap.promotions}
        />
      </section> */}
      <section id="about">
        <About />
      </section>
      {/* <section id="shop">
        <ProductGrid
          products={serializedProducts}
          isVisible={sectionsMap.products}
        />
      </section> */}
      {/* <section id="team">
        <TeamGrid members={members} isVisible={sectionsMap.team} />
      </section> */}
      {/* <section id="service">
        <ServiceCard
          services={serializedServices}
          isVisible={sectionsMap.services}
        />
      </section> */}
      {/* <section id="gallery">
        <GalleryGrid images={images} isVisible={sectionsMap.gallery} />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
