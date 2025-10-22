'use client'
import { useState } from 'react'
import Image from 'next/image'
import ContactModal from '../common/ContactModal'

export default function FirstScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="md:pt-16 bg-[#f5f7fa] mt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* 左侧文本内容 */}
          <div className="flex-1 pl-12 md:pl-24">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-6 text-[#0f32b8] md:text-6xl">
                AI can TARA
              </h1>
              <h2 className="text-2xl font-medium mb-4 text-gray-800 md:text-3xl">
                Automotive Cybersecurity Intelligent
                <br />
                Analysis Platform
              </h2>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-700  hover:to-blue-800 transition-colors text-sm md:text-base"
            >
              Contact Us
            </button>
            
            <div className="mt-24">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/building.svg"
                  alt="Company Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-xl md:text-2xl text-blue-600 font-bold">SIG Void Technology</span>
              </div>
              <p className="text-gray-600">
                Boost TARA with AI 
-- Secure your product with security expert knowledge              </p>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="flex-1 relative">
            <Image
              src="/instruction.svg"
              alt="instruction Image"
              width={900}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
} 