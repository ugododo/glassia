import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Navbar */}
      <nav className="w-full bg-custom_black py-4 px-6 md:px-20">
        <div className="flex items-center">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </nav>

      {/* Section principale */}
      <section className="h-screen flex items-center bg-white relative">
        {/* Texte à gauche avec largeur légèrement réduite */}
        <div className="z-10 w-full md:w-[45%] space-y-6 px-6 md:px-16">
          <h1
            className="text-5xl md:text-7xl font-semibold tracking-wide"
            style={{ lineHeight: "1.3" }}
          >
            VOS LUNETTES EN LEASING
          </h1>
          <p className="text-custom_black text-lg md:text-xl">
            Avec notre application, louez vos lunettes en toute simplicité,
            testez-les virtuellement avant de choisir, et prenez rendez-vous
            avec un opticien rapidement.
          </p>
          <div className="flex flex-col items-start space-y-4">
            {/* Boutons alignés à gauche */}
            <div className="flex gap-4 mb-10">
              <button className="px-10 py-3 bg-custom_black text-white rounded-full text-sm font-normal hover:bg-gray-800">
                TÉLÉCHARGER
              </button>
              <button className="px-10 py-3 border border-custom_black text-custom_black rounded-full text-sm font-normal hover:bg-gray-100">
                VIDÉO EXPLICATIVE
              </button>
            </div>

            {/* Flèche sous les boutons avec plus d'espace et bien centrée */}
            <Image
              src="/images/arrow.svg"
              alt="Flèche animée"
              className="w-12 h-12 animate-bounceY self-center"
              width={65}
              height={85}
            />
          </div>
        </div>

        {/* Image à droite encore plus large */}
        <div className="absolute top-0 right-0 h-full w-full md:w-[54%]">
          <div className="relative w-[100%] h-[90%]">
            <Image
              src="/images/image_wow.png"
              alt="Lunettes en leasing"
              layout="fill"
              objectFit="cover"
              className="rounded-none"
            />
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center">Fonctionnalités</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Essayage virtuel",
              desc: "Testez vos lunettes directement depuis chez vous.",
            },
            {
              title: "Prise de rendez-vous",
              desc: "Consultez un opticien partenaire en quelques clics.",
            },
            {
              title: "Gestion flexible",
              desc: "Modifiez ou annulez vos abonnements facilement.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-custom_black">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center">Avantages</h2>
        <ul className="mt-8 max-w-4xl mx-auto space-y-4 text-custom_black-700">
          {[
            "Flexibilité totale : changez de lunettes chaque année.",
            "Service client premium pour tous vos besoins.",
            "Prix compétitifs pour des produits de qualité.",
          ].map((advantage, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4"
            >
              <span className="text-custom_black-500 text-xl font-bold">✓</span>
              {advantage}
            </li>
          ))}
        </ul>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center">Témoignages</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Alice Dupont",
              feedback:
                "Le service est incroyable, j'ai pu essayer mes lunettes sans me déplacer.",
            },
            {
              name: "Jean Martin",
              feedback:
                "Très pratique et flexible, je ne changerais pour rien au monde.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <p className="italic">“{testimonial.feedback}”</p>
              <p className="mt-4 font-semibold text-custom_black-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center">Tarifs</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              plan: "Basique",
              price: "10€/mois",
              features: ["1 paire/an", "Essai virtuel inclus", "Support standard"],
            },
            {
              plan: "Premium",
              price: "20€/mois",
              features: ["2 paires/an", "Essai virtuel + RDV", "Support prioritaire"],
            },
            {
              plan: "Exclusif",
              price: "30€/mois",
              features: ["3 paires/an", "Remplacement rapide", "Support premium"],
            },
          ].map((tarif, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{tarif.plan}</h3>
              <p className="text-2xl font-bold text-custom_black-600 mt-2">
                {tarif.price}
              </p>
              <ul className="mt-4 space-y-2 text-custom_black-700">
                {tarif.features.map((feature, idx) => (
                  <li key={idx}>- {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold">Newsletter</h2>
        <p className="mt-4 text-custom_black-700">
          Inscrivez-vous pour recevoir nos dernières offres.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Votre email"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            S'inscrire
          </button>
        </div>
      </section>
    </div>
  );
}
