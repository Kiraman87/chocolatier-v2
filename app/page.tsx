import Hero from '@/components/hero'
import About from '@/components/about'
import Products from '@/components/products'
import Craftsmanship from '@/components/craftsmanship'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import AntdDemo from '@/components/ui/antd-demo'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Craftsmanship />
      <Testimonials />
      <Contact />
      <section className="py-24 bg-white border-t border-[#e8e4df]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="font-label text-[#c9a962] block mb-4">DÉMO</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a]">
              Composants Ant Design
            </h2>
          </div>
          <AntdDemo />
        </div>
      </section>
      <Footer />
    </main>
  )
}