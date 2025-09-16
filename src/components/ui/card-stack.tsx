"use client";
import { useEffect, useState } from "react";

let interval: ReturnType<typeof setInterval>;


type Card = {
  id: number;
  image: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  maxVisibleCards = 4,
  onImageClick,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  maxVisibleCards?: number;
  onImageClick?: (imageSrc: string) => void;
}) => {
  const CARD_OFFSET = offset || 15;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const FADE_DURATION = 2000; // Duration for fade effect in ms
  const CYCLE_DURATION = 4000; // Total cycle duration in ms
  
  // Filter out any undefined or invalid items
  const validItems = items.filter(item => item && item.image && item.id !== undefined);
  const [cards, setCards] = useState<Card[]>(validItems);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [topCardOpacity, setTopCardOpacity] = useState(1);

  useEffect(() => {
    if (validItems.length > 0) {
      startFlipping();
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [validItems.length]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Start fading out the top card
      setTopCardOpacity(0);
      
      // After fade out completes, rearrange cards and fade back in
      setTimeout(() => {
        setCards((prevCards: Card[]) => {
          const newArray = [...prevCards];
          newArray.unshift(newArray.pop()!);
          return newArray;
        });
        
        // Small delay to ensure DOM update, then fade in
        setTimeout(() => {
          setTopCardOpacity(1);
          setIsTransitioning(false);
        }, 50);
        
      }, FADE_DURATION);
      
    }, CYCLE_DURATION);
  };

  const handleImageClick = (imageSrc: string, index: number) => {
    // Only allow clicking on the top card (index 0)
    if (index === 0 && onImageClick) {
      onImageClick(imageSrc);
    }
  };

  // Only show the specified number of cards in the visual stack
  const visibleCards = cards.slice(0, maxVisibleCards);

  return (
    <div className="card-stack-wrapper">
      {visibleCards.map((card, index) => {
        // Additional safety check
        if (!card || !card.image) return null;
        
        const isTopCard = index === 0;
        const cardOpacity = isTopCard ? topCardOpacity : 1;
        const cardScale = 1 - index * SCALE_FACTOR;
        const cardTranslateY = index * -CARD_OFFSET;
        
        return (
          <div
            key={`${card.id}-${index}`}
            className="card-stack-item"
            style={{
              transformOrigin: "top center",
              transform: `translateY(${cardTranslateY}px) scale(${cardScale})`,
              zIndex: maxVisibleCards - index,
              opacity: cardOpacity,
              transition: isTopCard 
                ? `opacity ${FADE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease-out`
                : "transform 0.3s ease-out"
            }}
          >
            <div 
              className="card-image-container"
              onClick={() => handleImageClick(card.image, index)}
              style={{ 
                cursor: isTopCard ? 'pointer' : 'default' 
              }}
            >
              <img 
                src={card.image} 
                alt={`Project ${card.id}`}
                className="card-image-element"
                onError={(e) => {
                  // Handle image loading errors
                  console.warn(`Failed to load image: ${card.image}`);
                  e.currentTarget.src = '/placeholder-image.jpg'; // fallback image
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};