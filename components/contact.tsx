import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-label text-[#c9a962] block mb-4">
              Contact
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] mb-6">
              Venez nous
              <br />
              <span className="text-[#c9a962]">rencontrer</span>
            </h2>
            
            <div className="divider-gold mb-8" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Adresse</p>
                  <p className="text-[#6b6b6b]">42 Rue des Martyrs<br />75009 Paris, France</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Téléphone</p>
                  <p className="text-[#6b6b6b]">+33 1 42 82 12 34</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Email</p>
                  <p className="text-[#6b6b6b]">bonjour@maitre-chocolatier.fr</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#1a1a1a]">Horaires</p>
                  <p className="text-[#6b6b6b]">Lun — Ven: 10h — 19h<br />Sam: 10h — 20h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-editorial">
            <h3 className="font-display text-xl text-[#1a1a1a] mb-6">
              Envoyer un message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="font-label text-[11px] text-[#6b6b6b] block mb-2">NOM</label>
                <input
                  type="text"
                  className="w-full p-3 bg-[#faf8f5] border border-[#e8e4df] text-[#1a1a1a] focus:border-[#c9a962] outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="font-label text-[11px] text-[#6b6b6b] block mb-2">EMAIL</label>
                <input
                  type="email"
                  className="w-full p-3 bg-[#faf8f5] border border-[#e8e4df] text-[#1a1a1a] focus:border-[#c9a962] outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="font-label text-[11px] text-[#6b6b6b] block mb-2">MESSAGE</label>
                <textarea
                  rows={4}
                  className="w-full p-3 bg-[#faf8f5] border border-[#e8e4df] text-[#1a1a1a] focus:border-[#c9a962] outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
