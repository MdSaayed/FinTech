import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Description from "../description/Description";
import Title from "../title/Title";
import Button from "../button/Button";
import { FaApple } from "react-icons/fa";


const FeaturesHero = () => {
  // State for left and right cursor positions
  const [cursorLeft, setCursorLeft] = useState({ x: -50, y: 100 });
  const [cursorRight, setCursorRight] = useState({ x: 500, y: 200 });

  useEffect(() => {
    const section = document.getElementById("mouse-area");
    if (!section) return;

    const updateSectionRect = () => section.getBoundingClientRect();

    const moveCursorLeft = () => {
      const sectionRect = updateSectionRect();
      setCursorLeft(prev => ({
        x: Math.min(Math.max(prev.x + (Math.random() * 600 - 300), sectionRect.left + 20), sectionRect.left + sectionRect.width / 2 - 50),
        y: Math.min(Math.max(prev.y + (Math.random() * 600 - 300), sectionRect.top + 20), sectionRect.bottom - 50),
      }));
    };

    const moveCursorRight = () => {
      const sectionRect = updateSectionRect();
      setCursorRight(prev => ({
        x: Math.min(Math.max(prev.x + (Math.random() * 600 - 300), sectionRect.left + sectionRect.width / 2 + 50), sectionRect.right - 50),
        y: Math.min(Math.max(prev.y + (Math.random() * 600 - 300), sectionRect.top + 20), sectionRect.bottom - 50),
      }));
    };

    let leftInterval, rightInterval;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        leftInterval = setInterval(moveCursorLeft, Math.random() * 5000 + 2000);
        setTimeout(() => {
          rightInterval = setInterval(moveCursorRight, Math.random() * 5000 + 2500);
        }, Math.random() * 2000 + 1000); // Different delay for each cursor
      } else {
        clearInterval(leftInterval);
        clearInterval(rightInterval);
      }
    }, { threshold: 0.5 });

    observer.observe(section);
    return () => {
      observer.disconnect();
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <section  className="">
        <div className="container">      
            <div id="mouse-area" class="bg-white rounded-3xl px-2 py-28 relative">
                {/* Title */}
                <Title align="justify-center" size='text-[2.5rem] lg:text-7xl' className="text-center max-w-3xl">Drop your finance data right into your <span> sales funnel!</span></Title>

                {/* Description */}
                <Description text="Streamline your workflow, manage projects, and empower your team with AirTask  the all-in-one task management solution." className="max-w-xl" />

                {/* Buttons */}
                <div className="flex justify-center gap-6 flex-wrap mt-12">
                    <Button text="Get Started for Free" to='' icon={false} iconComponent={<FaApple />} />
                    <Button text="Download in iso" to='' icon={true} iconComponent={<FaApple />} variant="secondary" />
                </div>

                {/* Animated Cursors, Ensuring They Stay Inside Container */}
                <div className="absolute transition-all duration-[2000ms] ease-in-out"
                    style={{ left: `${cursorLeft.x}px`, top: `${cursorLeft.y}px` }}>
                        <img src="/assets/icons/mouse-1.svg" alt="" />
                    </div>
                <div className="absolute transition-all duration-[2500ms] ease-in-out"
                    style={{ left: `${cursorRight.x}px`, top: `${cursorRight.y}px` }}>
                        <img src="/assets/icons/mouse-2.svg" alt="" />
                    </div>
            </div>
       </div>
    </section>
  );
};

export default FeaturesHero;