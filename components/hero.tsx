import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf8f5]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a962]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="mb-8">
          <span className="font-label text-[#c9a962]">
            Artisan Chocolatier — Paris
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] mb-8 max-w-5xl mx-auto leading-[0.9]">
          L'Art du Chocolat
          <br />
          <span className="text-[#c9a962]">à la Française</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto mb-12 leading-relaxed">
          Depuis 1924, nous créons des chocolats d'exception avec les plus fins 
          cacao du monde. Chaque pièce est une œuvre d'art, façonnée par 
          des mains expertes et un amour inconditionné du chocolat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#collections" className="btn-primary">
            Découvrir nos collections
          </a>
          <a href="#about" className="btn-outline">
            Notre histoire
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-5 h-5 text-[#c9a962] animate-bounce" />
      </div>
    </section>
  )
}
