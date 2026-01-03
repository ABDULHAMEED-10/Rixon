import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";

const CardDeck = ({ cards, renderCard, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = useCallback((direction) => {
    // Only handle horizontal swipes (left/right), ignore vertical (up/down)
    if (direction === "left") {
      // Move top card to back
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    } else if (direction === "right") {
      // Move back card to front
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
    // Ignore "up" and "down" directions to prevent accidental swaps while scrolling
  }, [cards.length]);

  // Calculate 3D card positions in the deck with realistic depth and rotation
  const getCard3DTransform = (index) => {
    const position = (index - currentIndex + cards.length) % cards.length;
    const zIndex = cards.length - position;
    
    // Depth: cards behind move further back in Z-axis
    const zDepth = -position * 40; // Each card is 40px further back
    
    // Scale: cards behind are progressively smaller but still very visible
    const scale = 1 - position * 0.02; // 2% smaller per card (minimal reduction for maximum visibility)
    
    // Y offset: cards behind are much lower so more of them is visible
    const yOffset = position * 25; // 25px lower per card - much more visible
    
    // Rotation: minimal rotation so more of the card remains visible
    // Top card: no rotation, cards behind: very slight rotation
    const rotateX = position === 0 ? 0 : position * 1; // Very slight X rotation
    const rotateY = position === 0 ? 0 : position * 0.8; // Very slight Y rotation
    
    // Opacity: cards behind should be VERY visible so users can clearly see there are cards behind
    const opacity = position === 0 ? 1 : Math.max(0.98 - position * 0.03, 0.92);
    
    // Shadow intensity based on position - stronger for better visibility
    const shadowIntensity = position === 0 ? 1 : Math.max(0.7 - position * 0.1, 0.5);

    return {
      zIndex,
      zDepth,
      scale,
      yOffset,
      rotateX,
      rotateY,
      opacity,
      shadowIntensity,
      position,
    };
  };

  // Swipe handlers - attach to container, only horizontal swipes
  const containerHandlers = useSwipeable({
    onSwipedLeft: () => {
      handleSwipe("left");
    },
    onSwipedRight: () => {
      handleSwipe("right");
    },
    trackMouse: false,
    trackTouch: true,
    preventScrollOnSwipe: false,
    delta: 30,
    trackPad: false,
  });

  return (
    <div 
      className={`relative w-full max-w-md mx-auto my-12 sm:my-16 ${className}`}
      style={{
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}
      {...containerHandlers}
    >
      {/* 3D Container */}
      <div
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Spacer div to reserve space and prevent overlap */}
        <div
          style={{
            visibility: "hidden",
            height: "auto",
            padding: "16px",
          }}
        >
          {renderCard(cards[currentIndex], currentIndex, true)}
        </div>
        
        {/* Absolutely positioned cards for 3D effect */}
        {cards.map((card, index) => {
          const transform = getCard3DTransform(index);
          const isTop = index === currentIndex;
          const cardKey = `card-${card.id || index}`;

          return (
            <motion.div
              key={cardKey}
              onClick={isTop ? (e) => {
                e.stopPropagation();
                handleSwipe("left");
              } : undefined}
              animate={{
                scale: transform.scale,
                y: transform.yOffset,
                z: transform.zDepth,
                rotateX: transform.rotateX,
                rotateY: transform.rotateY,
                opacity: transform.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 25,
                mass: 0.8,
              }}
              className="absolute top-0 left-0 right-0 w-full flex items-center justify-center px-4"
              style={{
                zIndex: transform.zIndex,
                cursor: isTop ? "pointer" : "default",
                pointerEvents: isTop ? "auto" : "none",
                touchAction: isTop ? "pan-y" : "none",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                bottom: "auto",
                height: "auto",
                maxHeight: "100%",
                filter: `drop-shadow(0 ${10 + transform.position * 5}px ${20 + transform.position * 10}px rgba(0, 0, 0, ${0.3 * transform.shadowIntensity})) 
                         drop-shadow(0 0 ${transform.position * 5}px rgba(34, 197, 94, ${0.2 * transform.shadowIntensity}))`,
              }}
              whileTap={isTop ? { 
                scale: 0.97,
                z: transform.zDepth - 10,
              } : {}}
            >
              <div
                style={{
                  transformStyle: "preserve-3d",
                  width: "100%",
                  height: "auto",
                  maxHeight: "100%",
                }}
              >
                {renderCard(card, index, isTop)}
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

CardDeck.propTypes = {
  cards: PropTypes.array.isRequired,
  renderCard: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CardDeck;


