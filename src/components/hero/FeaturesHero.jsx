import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import Description from "../description/Description";
import Title from "../title/Title";
import Button from "../button/Button";

const FeaturesHero = () => {
  const [cursorLeft, setCursorLeft] = useState({ x: 50, y: 100 });
  const [cursorRight, setCursorRight] = useState({ x: 500, y: 200 });

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

    // Start movement with different delays
    moveCursor(setCursorLeft);
    setTimeout(() => {
      moveCursor(setCursorRight);
    }, Math.random() * 2000 + 1000); // Right cursor starts later

    return () => {};
  }, []);
  

  return (
      <section>
        <div className="container section-padding-0 relative">
          <div id="mouse-area" className="bg-white rounded-3xl px-2 py-28 relative overflow-hidden">
            {/* Title */}
            <Title align="justify-center" size="text-[2.5rem] lg:text-[4.1rem]" className="text-gray-900 text-center max-w-[800px] z-30">
              Drop your finance data right into your <span>sales funnel!</span>
            </Title>

            {/* Description */}
            <Description
              text="Streamline your workflow, manage projects, and empower your team with AirTask, the all-in-one task management solution."
              className="max-w-xl z-30"
            />

            {/* Buttons */}
            <div className="flex justify-center gap-6 flex-wrap mt-12 z-30">
              <Button text="Get Started for Free" to="" icon={false} iconComponent={<FaApple />} />
              <Button text="Download in iOS" to="" icon={true} iconComponent={<FaApple />} variant="secondary" />
            </div>

            {/* Animated Cursors */}
            <div
              className="absolute transition-all duration-[5000ms] ease-in-out z-20"
              style={{ left: `${cursorLeft.x}px`, top: `${cursorLeft.y}px` }}
            >
              <img src="/assets/icons/mouse-1.svg" alt="" />
            </div>
            <div
              className="absolute transition-all duration-[4500ms] ease-in-out z-20"
              style={{ left: `${cursorRight.x}px`, top: `${cursorRight.y}px` }}
            >
              <img src="/assets/icons/mouse-2.svg" alt="" />
            </div>
            
            {/* Background Images */}
            <div className=" ">
              <img
                className="absolute -left-10 -top-20 xl:left-0 xl:top-10 z-10"
                src="/assets/imgs/hero/hero-bg-1.png"
                alt="Hero Bg One"
              />
              <img
                className="absolute -right-10 lg:right-0 -bottom-20  lg:bottom-4 z-10"
                src="/assets/imgs/hero/hero-bg-2.png"
                alt="Hero Bg Two"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default FeaturesHero;
