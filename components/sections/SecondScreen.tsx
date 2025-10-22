"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "System Topology Analysis",
    description: "Automotive E/E architecture visualization",
    activeImage: "/active1.svg",
    inactiveImage: "/inactive1.svg",
  },
  {
    id: 2,
    title: "Attack Tree Generation",
    description: "AI-powered threat path modeling",
    activeImage: "/active2.svg",
    inactiveImage: "/inactive2.svg",
  },
  {
    id: 3,
    title: "TARA Risk Quantification",
    description: "ISO 21434-compliant scoring",
    activeImage: "/active3.svg",
    inactiveImage: "/inactive3.svg",
  },
];

export default function SecondScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 自动轮播
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex(current => (current + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Auto-Generate TARA with AI</h2>
          <p className="text-gray-600 text-lg">
            From Topology Maps to Actionable Risk Reports – All in One Intelligent Workflow
          </p>
          <div className="w-6 h-2 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-500 ${
                index === activeIndex ? "scale-110 z-10" : "scale-90 opacity-70"
              }`}
              onMouseEnter={() => {
                setIsPaused(true);
                setActiveIndex(index);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={`relative w-full md:w-80 bg-gray-50 rounded-xl p-6 cursor-pointer ${
                  index === activeIndex ? "shadow-lg" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="aspect-square mb-6">
                  <Image
                    src={index === activeIndex ? slide.activeImage : slide.inactiveImage}
                    alt={slide.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>

              {/* 箭头指示器 */}
              {index < slides.length - 1 && (
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <Image
                    src="/chevron-right.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="w-6 h-6 text-blue-600"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
