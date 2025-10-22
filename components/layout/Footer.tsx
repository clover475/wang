"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#061965] text-white py-16">
      <div className="container mx-auto px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-30 md:ml-20">
          {/* 左侧公司信息 */}
          <div className="space-y-6 text-left md:text-left">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="AlcanTARA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <span className="text-white text-xl font-medium pl-2">AlcanTARA</span>
            </div>
            <div className="text-gray-300 text-sm space-y-1">
              <p>SIG Void Technology:</p>
              <p>Accelerate TARA with AI Precision — Secure</p>
              <p>Automotive Cybersecurity in Hours.</p>
            </div>
            {/* 社交媒体图标 */}
            <div className="flex items-center gap-4 pt-4">
              <Image src="/camera.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />

              <Image src="/earth.svg" alt="Discord" width={24} height={24} className="w-6 h-6" />

              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} className="w-6 h-6" />

              <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" />
            </div>
          </div>

          {/* 中间地址信息 */}
          <div className=" md:text-left">
            <h3 className="text-lg font-medium mb-4">Company Address</h3>
            <p className="text-gray-300 text-sm">
              No.7, 6th Jiuxianqiao Road,
              <br />
              Chaoyang District, Beijing
            </p>
          </div>

          {/* 右侧邮箱信息 */}
          <div className=" md:text-left">
            <h3 className="text-lg font-medium mb-4">Email</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>sales@sigvoid.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
