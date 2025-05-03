import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useState, useLayoutEffect } from "react";

// Utility hook to measure element width
function useElementWidth(ref: React.RefObject<HTMLDivElement>): number {
  const [width, setWidth] = useState<number>(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);
  return width;
}

// Card props interface
interface CardProps {
  image?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
      <div className="flex-shrink-0 mx-1.5 sm:mx-4 w-56 sm:w-80 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-36 sm:h-48 overflow-hidden">
          <img
            src={image || "/api/placeholder/400/320"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2.5 sm:p-4">
          <h3 className="font-bold text-base sm:text-xl mb-1.5 sm:mb-2 text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-base break-words whitespace-normal">
            {description}
          </p>
        </div>
      </div>
    );
  };  

// VelocityCards props interface
interface VelocityCardsProps {
  children: ReactNode;
  baseVelocity?: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: {
    input: number[];
    output: number[];
  };
}

// VelocityCards component
const VelocityCards: React.FC<VelocityCardsProps> = ({
  children,
  baseVelocity = 100,
  scrollContainerRef,
  damping = 50,
  stiffness = 400,
  numCopies = 3,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
}) => {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef
    ? { container: scrollContainerRef }
    : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: damping,
    stiffness: stiffness,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
  );
  const copyRef = useRef<HTMLDivElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const cardRows = [];
  for (let i = 0; i < numCopies; i++) {
    cardRows.push(
      <div
        className="flex-shrink-0 flex"
        key={i}
        ref={i === 0 ? copyRef : null}
      >
        {children}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden mt-4 sm:mt-6 py-3 sm:py-4 mb-4 sm:mb-6">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {cardRows}
      </motion.div>
    </div>
  );
};

// Card data interface
interface CardData {
  image?: string;
  title: string;
  description: string;
}

// ScrollVelocityMarquee props interface
interface ScrollVelocityMarqueeProps {
  customCards?: CardData[][];
  baseVelocities?: number[];
}

// ScrollVelocityMarquee component
const ScrollVelocityMarquee: React.FC<ScrollVelocityMarqueeProps> = ({
  customCards,
  baseVelocities = [50, -40],
}) => {
  const defaultCardsRow1: CardData[] = [
    {
      image: "/images/weaving-village.jpg",
      title: "Weaving Village Experience",
      description:
        "Step into a historic Bengali village and witness the intricate craft of handloom weaving. Engage with master weavers and try weaving a motif yourself.",
    },
    {
      image: "/images/natural-dyeing.jpg",
      title: "Natural Dyeing Workshop",
      description:
        "Explore traditional dyeing methods using local flowers and minerals. Learn to prepare and dye fabrics naturally, guided by artisan experts.",
    },
    {
      image: "/images/folk-performance.jpg",
      title: "Folk Music & Baul Storytelling",
      description:
        "Experience Bengal’s rich spiritual heritage through a soul-stirring Baul music session. Listen to live performances and understand the deeper meaning of their lyrics.",
    },
    {
      image: "/images/bengali-lunch.jpg",
      title: "Authentic Bengali Lunch",
      description:
        "Enjoy a traditional Bengali thali served on banana leaves, prepared using ancestral recipes with seasonal ingredients in a rural courtyard setting.",
    },
  ];

  const defaultCardsRow2: CardData[] = [
    {
      image: "/images/terracotta-workshop.jpg",
      title: "Terracotta & Pottery Workshop",
      description:
        "Get hands-on with Bengal’s terracotta traditions. Create your own clay piece while learning from artisans who have shaped temples and markets for centuries.",
    },
    {
      image: "/images/cuisine-immersion.jpg",
      title: "Culinary Heritage Tour",
      description:
        "Walk through bustling local markets, pick fresh produce, and cook side-by-side with home cooks to learn cherished Bengali recipes and kitchen rituals.",
    },
    {
      image: "/images/rural-stay.jpg",
      title: "Rural Artisan Homestay",
      description:
        "Stay in a heritage artisan home, participate in daily village life, and hear stories passed down through generations over chai and folk songs.",
    },
    {
      image: "/images/textile-journey.jpg",
      title: "Textile Heritage Journey",
      description:
        "Trace the journey of a saree from loom to market—visit dye pits, thread spinners, and fabric finishers. A rare glimpse into the entire textile ecosystem.",
    },
  ];

  // Use custom cards if provided, otherwise use default cards
  const cardRows = customCards || [defaultCardsRow1, defaultCardsRow2];

  return (
    <div className="p-4 sm:p-6 mt-16 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
        Experiences we offer
      </h1>

      {cardRows.map((cards, rowIndex) => (
        <VelocityCards
          key={rowIndex}
          baseVelocity={baseVelocities[rowIndex % baseVelocities.length]}
          numCopies={4}
        >
          {cards.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </VelocityCards>
      ))}
    </div>
  );
};

export default ScrollVelocityMarquee;
