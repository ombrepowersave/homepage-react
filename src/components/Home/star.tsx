'use client'
import React from 'react';
import Image from 'next/image';

const STAR: React.FC = () => {
  // 背景高宽比
  const aspectRatio = 280 / 1920; // 1920*120 的长条背景图，按实际比例展示

  return (
    <section className="relative w-full" style={{ paddingBottom: `${aspectRatio * 100}%` }}>
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_home_bg_star.png"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      
      {/* 主要内容容器 */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 md:px-16 py-8">
        <div className="flex items-center w-full max-w-6xl">
          {/* 左侧文字 */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ready To Get Started?</h2>
            <p className="text-xl text-white">Mihaus Is Free. Forever.</p>
          </div>

          {/* 分隔线 */}
          <div className="w-px h-16 bg-white opacity-70 mx-8"></div>

          {/* 右侧评分和下载数据 */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-white font-medium mr-2">4.8 Star Rating</span>
            </div>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image
                    key={star}
                    src="/images/icon_lab_star.png"
                    alt="Star"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                ))}
              </div>
            <p className="text-white text-sm">1,500 APP DOWNLOADS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default STAR;