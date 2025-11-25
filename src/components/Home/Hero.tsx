'use client'
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    }}>
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/img_home_bg_hero_1920_1080.png"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* 大标题部分 - 使用网格布局：左1/6到5/6，上1/6到1/3 */}
      <div className="absolute top-[15%] bottom-[66.67%] left-[10%] right-[10%] flex items-center justify-center p-[2px]">
        <div className="hero-title text-center w-full h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-5xl lg:text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-black">
            Say Goodbye To High Electricity 
            <br />
            Bills And Power Outage Anxiety
          </h1>
        </div>
      </div>

      {/* 小标题部分 - 使用网格布局：左1/3到2/3，上1/3到1/2 */}
      <div className="absolute top-[33.33%] bottom-[50%] left-[33.33%] right-[33.33%] flex items-center justify-center">
        <div className="hero-subtitle text-center">
          <p className="text-xl md:text-2xl text-black/90 font-light">
            AI Energy Management Solution<br />
            <span className="text-black/80">Average Annual Benefit Of 1200$ Per Family Served</span>
          </p>
        </div>
      </div>

      {/* 按钮部分 - 使用网格布局：左1/5到4/5，上1/2到2/3 */}
      <div className="absolute top-[50%] bottom-[33.33%] left-[20%] right-[20%] flex items-center justify-center">
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          {/* 按钮1 - Estimate Earnings */}
            <button className="transform transition-all duration-300 hover:scale-105 bg-transparent flex justify-center">
              <Image
                src="/images/icon/icon_btn_earnings.png"
                alt="Estimate Earnings"
                width={300}
                height={60}
                className="rounded-lg object-contain mx-auto"
                sizes="(max-width: 640px) 90%, 300px"
                priority
              />
            </button>

            {/* 按钮2 - App Store */}
            <button className="transform transition-all duration-300 hover:scale-105 bg-transparent flex justify-center">
              <Image
                src="/images/icon/icon_btn_appstore.png"
                alt="App Store"
                width={300}
                height={60}
                className="rounded-lg object-contain mx-auto"
                sizes="(max-width: 640px) 90%, 300px"
                priority
              />
            </button>

            {/* 按钮3 - Google Play */}
            <button className="transform transition-all duration-300 hover:scale-105 bg-transparent flex justify-center">
              <Image
                src="/images/icon/icon_btn_googleplay.png"
                alt="Google Play"
                width={300}
                height={60}
                className="rounded-lg object-contain mx-auto"
                sizes="(max-width: 640px) 90%, 300px"
                priority
              />
            </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;