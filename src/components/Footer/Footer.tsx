'use client'
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer bg-white py-8 sm:py-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* 品牌名 */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Casally</h2>
        </div>
        
        {/* 横线 */}
        <div className="w-full border-t border-gray-200 mb-6 sm:mb-8 rounded-full" style={{ height: '2px' }}></div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company 链接组 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-black text-sm transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Support 链接组 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-600 hover:text-black text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Policy 链接组 */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">Policy</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 hover:text-black text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-black text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* 下载按钮 - 在小屏幕上独占一行 */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start sm:items-center">
            {/* App Store 按钮 */}
            <a 
              href="#appstore" 
              className="block bg-black transition-colors w-full sm:w-auto h-12 px-4 sm:w-40 sm:px-0 rounded-full flex items-center justify-center"
              aria-label="Download on the App Store"
            >
              <Image 
                src="/images/icon/icon_btn_hero_appstore.png" 
                alt="App Store" 
                width={150} 
                height={40} 
                className="mr-2" 
              />
            </a>
            
            {/* Google Play 按钮 */}
            <a 
              href="#googleplay" 
              className="block bg-black  transition-colors w-full sm:w-auto h-12 px-4 sm:w-40 sm:px-0 rounded-full flex items-center justify-center"
              aria-label="Get it on Google Play"
            >
              <Image 
                src="/images/icon/icon_btn_hero_googleplay.png" 
                alt="Google Play" 
                width={150} 
                height={40} 
                className="mr-2" 
              />
            </a>
          </div>
        </div>
        
        {/* 版权声明 */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Company Name All Rights Reserved
          </p>
        </div>
      </div>
      
      {/* 浮动按钮 - 使用固定定位但保持响应式 */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 flex flex-col gap-3 sm:gap-4 z-10">
        {/* up to top 按钮 */}
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors"
          aria-label="Back to top"
        >
          <Image 
            src="/images/icon/icon_btn_uptotop.png" 
            alt="Back to top" 
            width={120} 
            height={120} 
          />
        </button>
        
        {/* message 按钮 */}
        <button 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors"
          aria-label="Chat support"
        >
          <Image 
            src="/images/icon/icon_btn_message.png" 
            alt="Chat support" 
            width={120} 
            height={120} 
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;