import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Les meilleurs chocolats que j'ai jamais goûtés. Une expérience sensorielle incomparable.",
    author: 'Marie-Claire Dubois',
    role: 'Directrice, Guide Michelin France',
  },
  {
    quote: "Le Praliné aux Noisettes est absolument divin. On sent la qualité des ingrédients et le savoir-faire.",
    author: 'Pierre Hermé',
    role: 'Pâtissier, Paris',
  },
  {
    quote: "Un cadeau d'exception. La présentation est aussi belle que le contenu est délicieux.",
    author: 'Sophie Martin',
    role: 'Cliente fidèle depuis 2015',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-label text-[#c9a962] block mb-4">
            Témoignages
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a]">
            Ce qu'ils en disent
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="card-editorial text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
                ))}
              </div>

              <blockquote className="font-display text-lg text-[#1a1a1a] mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div>
                <p className="font-semibold text-[#1a1a1a]">{testimonial.author}</p>
                <p className="font-label text-[11px] text-[#6b6b6b]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
