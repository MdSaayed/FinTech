import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa"; // Importing Apple icon from react-icons
import {Description, Title, Button, AnimatedCursor } from "../../components";

// Importing images for background instead of using src paths directly
import HeroBgOne from "/assets/imgs/hero/hero-bg-1.png";
import HeroBgTwo from "/assets/imgs/hero/hero-bg-2.png";
import MouseIcon1 from "/assets/icons/mouse-1.svg"; 
import MouseIcon2 from "/assets/icons/mouse-2.svg"; 

const FeaturesHero = () => {
  // Declare state variables for the positions of the animated cursors
  const [cursorLeft, setCursorLeft] = useState({ x: 50, y: 100 });
  const [cursorRight, setCursorRight] = useState({ x: 500, y: 200 });

  // useEffect to handle mouse movement animation and cursor position updates
  useEffect(() => {
    const section = document.getElementById("mouse-area");
    if (!section) return;

    const sectionRect = section.getBoundingClientRect();

    // Instantly move the cursors on mount
    setCursorLeft({
      x: sectionRect.left + 50,
      y: sectionRect.top + 100,
    });
    setCursorRight({
      x: sectionRect.right - 100,
      y: sectionRect.top + 200,
    });

    // Function to move the cursor randomly within the section bounds
    const moveCursor = (setCursor) => {
      const newX = Math.min(Math.max(Math.random() * sectionRect.width, sectionRect.left + 20), sectionRect.right - 50);
      const newY = Math.min(Math.max(Math.random() * sectionRect.height, sectionRect.top + 20), sectionRect.bottom - 50);

      setCursor({ x: newX, y: newY });

      // Set random delay for next movement (3s to 8s)
      const nextMoveDelay = Math.random() * 5000 + 3000;
      setTimeout(() => {
        moveCursor(setCursor);
      }, nextMoveDelay);
    };

    // Start movement with different delays for left and right cursors
    moveCursor(setCursorLeft);
    setTimeout(() => {
      moveCursor(setCursorRight);
    }, Math.random() * 2000 + 1000); // Right cursor starts later

    return () => {};
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section>
      <div className="container section-padding-0 relative">
        <div id="mouse-area" className="bg-white rounded-3xl px-2 py-28 relative">
          
          {/* Title */}
          <Title align="justify-center" size="text-[2.5rem] lg:text-[4.1rem]" className="text-gray-900 text-center max-w-[800px] z-30">
            Drop your finance data right into your <span>sales funnel!</span>
          </Title>

          {/* Description */}
          <Description
            text="Streamline your workflow, manage projects, and empower your team with AirTask, the all-in-one task management solution."
            className="max-w-xl z-30"
          />

          {/* Buttons Section */}
          <div className="flex justify-center flex-col md:flex-row gap-6 mt-12 z-30">
            <Button text="Get Started for Free" to="/pricing" icon={false} iconComponent={<FaApple />} />
            <Button text="Download in iOS" to="https://apps.apple.com"  icon={true} iconComponent={<FaApple />} variant="secondary" />
          </div>

          {/* Animated Cursors */}
          <AnimatedCursor position={cursorLeft} imageSrc={MouseIcon1} duration={5000} altText="Mouse Icon 1" />
          <AnimatedCursor position={cursorRight} imageSrc={MouseIcon2} duration={4500} altText="Mouse Icon 2" />
          
          {/* Background Images */}
          <div className="hidden md:block">
            <img
              className="absolute -left-10 -top-20 xl:left-0 xl:top-10 z-10"
              src={HeroBgOne} // Use imported image
              alt="Hero Bg One"
            />
            <img
              className="absolute -right-10 lg:right-0 -bottom-20 lg:bottom-4 z-10"
              src={HeroBgTwo} // Use imported image
              alt="Hero Bg Two"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
