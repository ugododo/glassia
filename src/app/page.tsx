"use client";
import React, { useState } from "react";
import Image from "next/image";

const features = [
  {
    title: "Essai virtuel",
    shortDescription: "Essayez des lunettes virtuellement pour trouver la paire qui vous convient le mieux",
    description:
      "Grâce à notre outil d’essayage virtuel, vous pouvez tester une large sélection de lunettes directement depuis votre smartphone ou votre ordinateur. Plus besoin de vous rendre en magasin pour essayer différents modèles : en quelques clics, visualisez chaque monture sur votre visage sous plusieurs angles et trouvez celle qui correspond parfaitement à votre morphologie et à votre style. Que vous recherchiez une paire élégante, moderne ou audacieuse, notre outil vous permet de comparer et d’affiner votre choix en toute simplicité, sans contrainte et en toute confiance.",
    image: "/images/essai-virtuel.png",
  },
  {
    title: "Chatbot IA",
    shortDescription: "Recherchez une lunette en fonction de critères spécifiques",
    description:
      "Interagissez avec notre chatbot IA pour obtenir des réponses instantanées et personnalisées. Que ce soit pour poser des questions ou obtenir des recommandations, notre assistant intelligent est disponible à tout moment. Grâce à l’intelligence artificielle, il comprend vos besoins, s’adapte à vos préférences et vous guide avec des réponses précises et pertinentes. Plus besoin d’attendre une assistance humaine : accédez à une aide rapide et efficace en toute simplicité. Quelle que soit votre demande, notre chatbot vous accompagne pour une expérience fluide et sans effort.",
    image: "/images/Chatbot.png",
  },
  {
    title: "Conseils d'opticien",
    shortDescription: "Posez vos questions à des profesionnels du métier",
    description:
      "Bénéficiez de l’expertise de nos opticiens pour des conseils adaptés à vos besoins. Que ce soit pour choisir la monture idéale, comprendre votre correction ou entretenir vos lunettes, nos professionnels sont à votre écoute. Grâce à leur savoir-faire, ils vous guident vers les meilleures options en fonction de votre style, de votre confort et de votre santé visuelle. Plus besoin de douter face à tant de choix : posez vos questions et recevez des recommandations précises et personnalisées pour paraître sous votre meilleur jour.",
    image: "/images/Conseils.png",
  },
  {
    title: "Prise de rendez-vous",
    shortDescription: "Prenez un rendez-vous avec un opticien proche de chez vous",
    description:
      "Planifiez facilement votre rendez-vous avec un opticien proche de chez vous. Que ce soit pour un bilan visuel, un ajustement de monture ou des conseils personnalisés, prenez rendez-vous en quelques clics et à l’horaire qui vous convient. Plus besoin d’attendre : accédez rapidement à un professionnel qualifié qui saura répondre à vos besoins. Profitez d’un service sur mesure, sans stress et en toute simplicité, pour une expérience fluide et adaptée à votre emploi du temps.",
    image: "/images/Rendez-vous.png",
  },
  {
    title: "SAV Avancé",
    shortDescription: "Réparez vos lunettes rapidement et efficacement",
    description:
      "Bénéficiez d’un service après-vente réactif pour réparer vos lunettes en toute simplicité. Qu’il s’agisse d’un ajustement, d’un remplacement de verres ou d’une réparation plus complexe, nos experts sont là pour redonner à votre monture son éclat et son confort d’origine. Plus besoin de vous inquiéter face aux petits accidents du quotidien : confiez vos lunettes à des professionnels qui sauront les remettre en état rapidement et efficacement. Profitez d’une prise en charge rapide et d’un service de qualité pour prolonger la durée de vie de vos lunettes en toute tranquillité.",
    image: "/images/SAV.png",
  },
];

const testimonials = [
  {
    name: "Mélanie G.",
    title: "Renouvellement anticipé",
    feedback:
      "J’adore changer de lunettes régulièrement, et avec l’option de renouvellement anticipé, c’est devenu super accessible ! J’ai changé de monture au bout de 6 mois, et le service client a été top.",
  },
  {
    name: "Pierre D.",
    title: "Essai de lunettes !",
    feedback:
      "L’essai virtuel est bluffant de réalisme ! J’ai pu tester plusieurs modèles depuis chez moi avant d’aller en boutique. En plus, j’ai eu une analyse visuelle hyper précise.",
  },
  {
    name: "Roxanne A.",
    title: "Service client au top !",
    feedback:
      "J’ai été bluffée par la qualité du service client. Après avoir perdu mes lunettes, j’ai contacté leur support prioritaire et en moins de 48h, j’avais déjà une nouvelle paire grâce à la garantie casse/perte.",
  },
];

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(Math.floor(testimonials.length / 2));

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  const plans = [
    {
      name: "GRATUITE",
      price: "0€",
      description: "Accès limité à l’application",
      features: ["Essai virtuel limité (3)", "Chat avec une IA"],
      buttonText: "TÉLÉCHARGER",
      buttonStyle: "border border-black text-black",
    },
    {
      name: "STANDARD",
      price: "4€/mois",
      subtext: "Sans engagement",
      description: "Accès à toutes les fonctionnalités de l’application",
      features: [
        "Essai virtuel illimité",
        "Chat avec IA",
        "Réduction exclusives chez des partenaires",
        "Analyse virtuelle",
        "Prise de rendez-vous avec un opticien",
      ],
      buttonText: "TÉLÉCHARGER",
      buttonStyle: "border border-black text-black",
    },
    {
      name: "PREMIUM",
      price: "Prix ajustable sous devis",
      subtext: "Engagement 1 an*",
      description: "Abonnement aux lunettes & accès à l’application",
      features: [
        "Fonctionnalités de la formule Standard",
        "Renouvellement anticipé",
        "SAV avancé",
        "Accès au support client prioritaire",
        "Possibilité de changer de modèle une fois par an",
        "Accès à des collections exclusives",
      ],
      footnote: "* Voir condition d'achat",
      buttonText: "DEMANDER UN DEVIS",
      buttonStyle: "bg-black text-white",
    },
  ];


  const handlePrevious = () => {
    setCurrentFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setMessage("Veuillez entrer un email valide.");
      return;
    }
    setMessage("Merci de vous être inscrit à notre newsletter !");
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajuste pour ne pas cacher sous la navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-custom_black py-4 px-6 md:px-20 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={20}
            className="object-contain"
          />
          {/* Liens de navigation */}
          <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
            <li className="cursor-pointer hover:opacity-75" onClick={() => scrollToSection("features")}>
              Fonctionnalités
            </li>
            <li className="cursor-pointer hover:opacity-75" onClick={() => scrollToSection("advantages")}>
              Avantages
            </li>
            <li className="cursor-pointer hover:opacity-75" onClick={() => scrollToSection("testimonials")}>
              Témoignages
            </li>
            <li className="cursor-pointer hover:opacity-75" onClick={() => scrollToSection("plans")}>
              Formules
            </li>
          </ul>
        </div>
      </nav>

      {/* Section principale */}
      <section className="h-screen flex items-center relative">
        {/* Texte à gauche avec largeur légèrement réduite */}
        <div className="z-10 w-full md:w-[45%] px-6 md:px-16 pt-8">
          <h1
            className="text-5xl md:text-6xl font-semibold tracking-wide"
            style={{ lineHeight: "1.3" }}
          >
            VOS LUNETTES EN LEASING
          </h1>
          <p className="text-custom_black text-lg md:text-xl">
            Avec notre application, louez vos lunettes en toute simplicité,
            testez-les virtuellement avant de choisir, et prenez rendez-vous
            avec un opticien rapidement.
          </p>
          <div className="flex flex-col items-start pt-4">
            {/* Boutons alignés à gauche */}
            <div className="flex gap-4 mb-10">
              <button className="px-10 py-3 border border-custom_black text-custom_black rounded-full text-sm font-normal hover:bg-gray-100">
                VIDÉO EXPLICATIVE
              </button>
            </div>

            {/* Boutons de téléchargement */}
            <div className="flex gap-4 mb-10 pb-6">
              <a target="_blank" href={'https://www.apple.com/'}>
                <Image
                  src="/images/download-ios.png"
                  alt="Bouton de téléchargement IOS"
                  priority
                  unoptimized
                  width={160}
                  height={20}
                />
              </a>
              <a target="_blank" href={'https://www.android.com/'}>
                <Image
                  src="/images/download-android.png"
                  alt="Bouton de téléchargement Android"
                  priority
                  unoptimized
                  width={160}
                  height={20}
                />
              </a>
            </div>

            {/* Flèche sous les boutons avec plus d'espace et bien centrée */}
            <div className="pl-40">
              <Image
                src="/images/arrow.svg"
                alt="Flèche animée"
                className="w-16 h-16 animate-bounceY self-left"
                width={65}
                height={85}
              />
            </div>
          </div>
        </div>

        {/* Image à droite encore plus large */}
        <div className="absolute top-0 right-0 h-full w-full md:w-[54%]">
          <div className="relative w-[100%] h-[100%]">
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
      <section id="features" className="pb-16 px-6 md:px-16 pt-12">
        <h2
          className="text-4xl font-bold mb-8"
          style={{ lineHeight: "1.3" }}
        >
          FONCTIONNALITÉS
        </h2>

      {/* Contenu principal avec image */}
      <div className="flex flex-col md:flex-row items-start gap-8 items-center">
        {/* Image à gauche */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={features[currentFeature].image}
            alt={features[currentFeature].title}
            width={600}
            height={400}
          />
        </div>

        {/* Texte à droite, verticalement centré */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4">{features[currentFeature].title}</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {features[currentFeature].description}
          </p>
        </div>
      </div>
        {/* Boutons */}
      <div className="flex justify-between mt-8">
        <button
          className="text-gray-500 hover:text-black"
          onClick={handlePrevious}
        >
          <Image
            src="/images/arrow-left.svg"
            alt="Précédent"
            width={24}
            height={24}
          />
        </button>
        <button
          className="text-gray-500 hover:text-black"
          onClick={handleNext}
        >
          <Image
            src="/images/arrow-right.svg"
            alt="Suivant"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Stepper */}
      <div className="relative mt-12">
        {/* Ligne connectée */}
        <div className="absolute top-3 w-full border-t border-custom_black"></div>

        <div className="flex w-full justify-between items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col"
            >
              {/* Cercle principal */}
              <div
                className={`w-6 h-6 rounded-full ${
                  index < currentFeature
                    ? "bg-primary"
                    : index === currentFeature
                    ? "bg-primary relative"
                    : "bg-custom_black"
                }`}
              >
                {/* Cercle secondaire autour de l’étape active */}
                {index === currentFeature && (
                  <div className="absolute -top-2 -left-2 w-10 h-10 border-2 border-primary rounded-full"></div>
                )}
              </div>

              {/* Titres et descriptions secondaires */}
              <span
                className={`mt-4 text-sm ${
                  index === currentFeature ? "text-custom_black font-semibold" : "text-custom_black font-semibold"
                }`}
              >
                {feature.title}
              </span>
              <span
                className={`text-xs mt-1 w-4/6 ${
                  index === currentFeature ? "text-custom_black" : "text-custom_black"
                }`}
              >
                {feature.shortDescription}
              </span>
            </div>
          ))}
          </div>
          <div className="flex flex-col items-start pr-20 pt-20">
            <Image
              src="/images/arrow.svg"
              alt="Flèche animée"
              className="w-16 h-16 animate-bounceY self-end"
              width={85}
              height={105}
            />
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="advantages" className="px-6 md:px-16 relative">
        <h2 className="text-4xl font-bold text-right mb-12">AVANTAGES</h2>

        {/* Conteneur des cartes et de la ligne */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-20">
          {/* Ligne connectée */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 border-t-2 border-custom_black"
            style={{
              width: "90%", // Ajustez ici pour que la largeur soit limitée
              maxWidth: "75rem", // Largeur maximale alignée sur la largeur des cartes
              margin: "0 auto", // Centrer la ligne horizontalement
            }}
          ></div>

          {/* Cartes */}
          {[
            {
              icon: "/images/Avantage1.png",
              title: "Une offre plus accessible.",
              number: "01",
            },
            {
              icon: "/images/Avantage2.png",
              title: "Des conseils adaptés à votre physionomie.",
              number: "02",
            },
            {
              icon: "/images/Avantage3.png",
              title: "Un service client très réactif.",
              number: "03",
            },
          ].map((advantage, index) => (
            <div
              key={index}
              className="relative p-10 md:w-[25rem] md:h-[25rem] transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              style={{
                backgroundImage: `url('/images/Avantage_bg.svg')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            >
              {/* Icône */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full">
                <Image
                  src={advantage.icon}
                  alt={advantage.title}
                  width={46}
                  height={46}
                  priority
                  unoptimized
                  quality={100}
                />
              </div>

              {/* Contenu */}
              <div className="text-left w-60 pl-12">
                <h3 className="text-2xl text-custom_black" style={{ lineHeight: "1.3" }}>{advantage.title}</h3>
              </div>

              {/* Numéro */}
              <div className="text-custom_black text-6xl font-medium text-right pr-6">
                {advantage.number}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start pl-20 pt-20">
            <Image
              src="/images/arrow.svg"
              alt="Flèche animée"
              className="w-16 h-16 animate-bounceY self-start"
              width={85}
              height={105}
            />
          </div>
      </section>

      {/* Témoignages */}
      <section id="testimonials" className="py-16 px-16 relative">
        <h2 className="text-4xl font-bold text-left mb-4">TÉMOIGNAGES</h2>
        <p className="text-custom_black text-left mb-12">
          Ils en parlent mieux que personne, ils ont testé pour vous !
        </p>

        {/* Carrousel */}
        <div className="relative flex items-center justify-center overflow-visible min-h-[300px]">
          <div className="flex items-center gap-8">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isLeft =
                index === (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isRight =
                index === (currentIndex + 1) % testimonials.length;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`cursor-pointer transition-all duration-500 ease-in-out relative flex flex-col p-8 ${
                    isActive
                      ? "scale-100 opacity-100 z-20"
                      : isLeft || isRight
                      ? "scale-50 opacity-100 z-10"
                      : "scale-50 opacity-0 z-0"
                  }`}
                >
                  {/* Image en arrière-plan */}
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src="/images/Temoignages_bg.svg"
                      alt="Témoignage"
                      layout="fill"
                      objectFit="contain"
                      className={`transition-transform duration-500 ${
                        isActive ? "scale-150" : "scale-150"
                      }`}
                    />
                  </div>

                  {/* Contenu */}
                  <h3
                    className={`${
                      isActive
                        ? "text-xl font-bold mb-2"
                        : "text-xs font-bold mb-1"
                    }`}
                  >
                    {testimonial.title}
                  </h3>
                  <p
                    className={`text-custom_black italic ${
                      isActive ? "mb-4 text-base" : "mb-2 text-xs"
                    }`}
                  >
                    {testimonial.feedback}
                  </p>
                  <p
                    className={`text-custom_black font-bold ${
                      isActive ? "text-base" : "text-xs"
                    }`}
                  >
                    — {testimonial.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center pt-20">
            <Image
              src="/images/arrow.svg"
              alt="Flèche animée"
              className="w-16 h-16 animate-bounceY self-center"
              width={85}
              height={105}
            />
          </div>
      </section>

      {/* Formules */}
      <section id="plans" className="pb-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Formules</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full px-4 flex justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between border"
          >
            <div>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                {plan.name}
              </span>
              <h2 className="text-3xl font-bold mt-4">{plan.price}</h2>
              {plan.subtext && <p className="text-gray-500 text-sm">{plan.subtext}</p>}
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <h3 className="font-semibold mt-4">Fonctionnalités incluses</h3>
              <ul className="mt-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-black">■</span> {feature}
                  </li>
                ))}
              </ul>
              {plan.footnote && <p className="text-gray-500 text-xs mt-2">{plan.footnote}</p>}
            </div>
            <button
              className={`mt-6 py-3 px-6 rounded-full font-semibold ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>

      {/* Newsletter */}
      <section className="bg-custom_gray py-10 flex justify-center w-full">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl bg-custom_gray rounded-lg p-6 gap-6">
        <div className="text-left md:w-1/3">
          <h2 className="text-sm font-bold text-gray-700 uppercase">Restez à jour, suivez notre</h2>
          <h2 className="text-4xl font-bold">NEWSLETTER</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-1 items-center w-full bg-white rounded-full overflow-hidden">
          <input
            type="email"
            className="flex-1 px-6 py-3 text-gray-600 placeholder-gray-400 focus:outline-none bg-white"
            placeholder="Votre adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="bg-primary text-white px-6 py-3 font-semibold rounded-full hover:bg-custom_primary">
            S&apos;ABONNER
          </button>
        </form>
      </div>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      </section>

      {/* Footer */}
      <footer className="w-full bg-custom_black text-white py-10">
        <div className="px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1440px] mx-auto">
          {/* Section gauche : Logo et réseaux sociaux */}
          <div className="flex flex-col items-start gap-4">
            {/* Logo */}
            <Image
              src="/images/logo.svg"
              alt="Logo Glassia"
              width={120}
              height={40}
              className="object-contain"
            />
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-75">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-75">
                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" aria-label="TikTok" className="hover:opacity-75">
                <Image src="/images/tiktok.svg" alt="TikTok" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Section centrale : Boutons des stores */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="flex items-center justify-center text-black px-4 py-2 rounded-lg shadow hover:opacity-75"
            >
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={192}
                height={57}
                className="mr-2"
                unoptimized
                quality={100}
                priority
              />
            </a>
            <a
              href="#"
              className="flex items-center justify-center text-black px-4 py-2 rounded-lg shadow hover:opacity-75"
            >
              <Image
                src="/images/googleplay.png"
                alt="Google Play"
                width={192}
                height={57}
                className="mr-2"
                unoptimized
                quality={100}
              />
            </a>
          </div>

          {/* Section droite : Liens */}
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="font-semibold mb-4">À propos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:opacity-75">Optical Factory</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75">Besoin d&apos;aide</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75">Nous contacter</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Informations légales</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:opacity-75">CGU</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75">Mentions légales</a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75">Gestion des cookies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
