import React, { useState, useEffect } from "react";

// Icons
const StarIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.451a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.538 1.118l-3.37-2.451a1 1 0 00-1.176 0l-3.37 2.451c-.783.57-1.838-.197-1.538-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.222 9.373c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.946z" />
  </svg>
);

const AwardIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3.75M12 17.25V21M9.75 12H3M21 12h-6.75" />
  </svg>
);

// Interfaces
interface Feature {
  text: string;
  highlighted?: boolean;
}

interface PlanProps {
  title: string;
  price: string;
  features: Feature[];
  recommended?: boolean;
  icon?: React.ReactNode;
  tagline?: string;
  ctaText?: string;
}

// Pricing Card
const PricingCard: React.FC<PlanProps> = ({
  title,
  price,
  features,
  recommended = false,
  icon,
  tagline,
  ctaText = "Book Now",
}) => {
  const brown = {
    bg: "bg-amber-800 hover:bg-amber-900",
    light: "bg-amber-100 text-amber-900",
    border: "border-amber-300",
    text: "text-amber-800",
    highlight: "bg-amber-200",
    shadow: "shadow-amber-800/20",
  };

  return (
    <div
      className={`relative flex flex-col justify-between bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border
        ${recommended ? `scale-105 border-2 ${brown.border}` : "hover:scale-[1.02] border-gray-100"}`}
    >
      {recommended && (
        <div className={`${brown.bg} py-1 text-center`}>
          <p className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">Most Popular</p>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          {icon && <div className={`p-2 rounded-lg ${brown.light} mr-3`}>{icon}</div>}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900">{title}</h3>
            {tagline && <p className={`text-xs md:text-sm ${brown.text} mt-1`}>{tagline}</p>}
          </div>
        </div>

        <div className="mt-4 md:mt-6 flex items-baseline">
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">₹{price}</span>
          <span className="ml-1 text-xs md:text-sm font-medium text-gray-500">/person</span>
        </div>

        <ul className="mt-6 md:mt-8 space-y-3 md:space-y-4 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start p-2 rounded-lg ${feature.highlighted ? brown.highlight : ""}`}>
              <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-700 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-2 md:ml-3 text-sm text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>

        <button className={`mt-6 md:mt-8 w-full py-3 px-4 rounded-xl text-white font-medium transition-all duration-300 ${brown.bg} ${brown.shadow} flex items-center justify-center text-sm md:text-base`}>
          {ctaText}
        </button>
      </div>
    </div>
  );
};

// Experience Plans Wrapper
const ExperiencePlans: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const plans: PlanProps[] = [
    {
      title: "Cultural Explorer",
      tagline: "Perfect for first-time visitors",
      price: annualBilling ? "2,700" : "3,000",
      icon: <StarIcon />,
      features: [
        { text: "Half-day weaving village experience" },
        { text: "Traditional Bengali lunch", highlighted: true },
        { text: "Folk music performance (1 hour)" },
        { text: "Guided local market visit" },
        { text: "Souvenir photography package" },
      ],
      ctaText: "Start Your Journey",
    },
    {
      title: "Artisan Immersion",
      tagline: "Our most balanced experience",
      price: annualBilling ? "4,050" : "4,500",
      icon: <AwardIcon />,
      recommended: true,
      features: [
        { text: "All perks of 'Cultural Explorer'" },
        { text: "Full-day craft workshop (choice of one)", highlighted: true },
        { text: "Natural dyeing or Terracotta session" },
        { text: "Authentic Bengali lunch & snacks", highlighted: true },
        { text: "Baul storytelling experience" },
        { text: "Take home your handcrafted souvenir" },
      ],
      ctaText: "Select This Package",
    },
    {
      title: "Heritage Journey",
      tagline: "Deep cultural exploration",
      price: annualBilling ? "4,950" : "5,500",
      features: [
        { text: "All perks of 'Artisan Immersion'" },
        { text: "2-day artisan village experience", highlighted: true },
        { text: "Multiple craft workshops" },
        { text: "All meals included with cooking demo", highlighted: true },
        { text: "Evening folk performance" },
        { text: "Local transport between sites" },
        { text: "Professional photography" },
      ],
      ctaText: "Embark on Journey",
    },
    {
      title: "Luxury Cultural Retreat",
      tagline: "Premium all-inclusive experience",
      price: annualBilling ? "6,300" : "7,000",
      features: [
        { text: "All perks of 'Heritage Journey'" },
        { text: "3-day comprehensive cultural package", highlighted: true },
        { text: "Premium accommodation in heritage property" },
        { text: "Exclusive master artisan sessions", highlighted: true },
        { text: "All meals with special dinner experience" },
        { text: "Private Baul performance" },
        { text: "Curated textile gift package", highlighted: true },
        { text: "Airport/hotel transfers included" },
      ],
      ctaText: "Reserve Your Retreat",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* <span className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-semibold bg-amber-100 text-amber-800 mb-3 md:mb-4">
            Cultural Experiences
          </span> */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Experience <span className="text-amber-700">Bengal</span> Like Never Before
          </h2>
          <p className="mt-4 md:mt-5 text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in Bengali culture and crafts with our curated packages. Every journey is thoughtfully crafted for authentic, unforgettable cultural immersion.
          </p>
        </div>

        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="relative bg-white rounded-full p-1 flex shadow-sm border border-gray-200">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`${
                !annualBilling ? "bg-amber-800 text-white" : "bg-transparent text-gray-700"
              } relative rounded-full py-1.5 px-4 md:py-2 md:px-6 text-xs md:text-sm font-medium focus:outline-none transition-colors duration-200`}
            >
              Regular Price
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`${
                annualBilling ? "bg-amber-800 text-white" : "bg-transparent text-gray-700"
              } relative rounded-full py-1.5 px-4 md:py-2 md:px-6 text-xs md:text-sm font-medium focus:outline-none transition-colors duration-200`}
            >
              Group Discount (10% Off)
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isScrolled ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePlans;
