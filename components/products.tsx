import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Ganache Noir Intense',
    description: 'Cacao Venezuela 85%, notes de fruits rouges et de café torréfié',
    price: '24€',
    tag: 'Signature',
  },
  {
    name: 'Praliné aux Noisettes',
    description: 'Noisettes du Piémont torréfiées, praliné maison onctueux',
    price: '22€',
    tag: 'Classique',
  },
  {
    name: 'Truffe au Champagne',
    description: 'Champagne Grand Cru, ganache légère enrobée de cacao',
    price: '28€',
    tag: 'Édition Limitée',
  },
  {
    name: 'Caramel Beurre Salé',
    description: 'Caramel au beurre salé de Guérande, chocolat au lait 45%',
    price: '20€',
    tag: 'Best-seller',
  },
  {
    name: 'Mendiants Provence',
    description: 'Amandes, figues, raisins et écorces d\'orange confites',
    price: '26€',
    tag: 'Terroir',
  },
  {
    name: 'Coffret Découverte',
    description: 'Sélection de 24 pièces, voyage à travers nos saveurs',
    price: '65€',
    tag: 'Cadeau',
  },
]

export default function Products() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="font-label text-[#c9a962] block mb-4">
            Nos Créations
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Collections
            <br />
            <span className="text-[#c9a962]">Signature</span>
          </h2>
          
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group card-editorial cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="font-label text-[10px] text-[#c9a962]">
                  {product.tag}
                </span>
                <span className="font-display text-2xl text-[#1a1a1a]">
                  {product.price}
                </span>
              </div>

              <div className="aspect-[4/3] bg-[#f5f0e8] mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-label text-[#c9a962]/50">[Image]</span>
                </div>
                <div className="absolute inset-0 bg-[#2c1810]/0 group-hover:bg-[#2c1810]/5 transition-colors duration-500" />
              </div>

              <h3 className="font-display text-xl text-[#1a1a1a] mb-2">
                {product.name}
              </h3>
              
              <p className="text-base text-[#6b6b6b] mb-4">
                {product.description}
              </p>

              <div className="flex items-center gap-2 text-[#1a1a1a] group-hover:text-[#c9a962] transition-colors duration-300">
                <span className="font-label text-[11px]">Ajouter au panier</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="btn-outline inline-flex">
            Voir toute la collection
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
