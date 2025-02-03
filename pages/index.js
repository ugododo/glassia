import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Lunettes Leasing</h1>
        <btn>Se connecter</btn>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-4xl font-bold">Vos lunettes en leasing</h2>
        <p className="mt-4 text-lg">Essayez, louez et adoptez vos lunettes en toute simplicité.</p>
        <btn className="mt-6">Commencer</btn>
      </header>

      {/* Fonctionnalités */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Fonctionnalités</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Essayage Virtuel</h3>
              <p className="text-gray-700">Testez vos lunettes avant de les louer.</p>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Prise de Rendez-vous</h3>
              <p className="text-gray-700">Consultez un opticien partenaire en un clic.</p>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Chatbot IA</h3>
              <p className="text-gray-700">Trouvez les lunettes idéales grâce à notre chatbot intelligent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold">Témoignages</h2>
        <div className="mt-8 space-y-6">
          <blockquote className="italic">“Service incroyable, j’ai trouvé mes lunettes parfaites en quelques clics.”</blockquote>
          <blockquote className="italic">“L’essayage virtuel est bluffant !”</blockquote>
          <blockquote className="italic">“Une solution simple et efficace pour changer de lunettes régulièrement.”</blockquote>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Tarifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Basique</h3>
              <p className="text-gray-700">10€/mois</p>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Premium</h3>
              <p className="text-gray-700">20€/mois</p>
            </div>
          </div>
          <div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Exclusif</h3>
              <p className="text-gray-700">30€/mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold">Newsletter</h2>
        <p className="text-gray-700 mt-2">Recevez les dernières offres et nouveautés.</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Votre email" className="w-1/3" />
          <btn className="ml-2">S'inscrire</btn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>&copy; 2025 Lunettes Leasing. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
