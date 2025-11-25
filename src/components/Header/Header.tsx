'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md h-[88px]`}>

      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-bold text-text-primary w-[116px] h-[40px] text-2xl">
            Casally
          </span>
        </div>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 flex-wrap justify-center">
          <a
            href="/product"
            className="text-black hover:text-black transition-colors font-medium flex items-center justify-center min-w-[100px] h-[48px] rounded-full px-4 md:px-6 py-3 gap-[10px] whitespace-nowrap"
          >Product</a>
          <a
            href="/about"
            className="text-black hover:text-black transition-colors font-medium flex items-center justify-center min-w-[110px] h-[48px] rounded-full px-4 md:px-6 py-3 gap-[10px] whitespace-nowrap"
          >About Us</a>
          <a
            href="/contact"
            className="text-black hover:text-black transition-colors font-medium flex items-center justify-center min-w-[130px] h-[48px] rounded-full px-4 md:px-6 py-3 gap-[10px] whitespace-nowrap"
          >Contact Us</a>
          <a
            href="/policy"
            className="text-black hover:text-black transition-colors font-medium flex items-center justify-center min-w-[90px] h-[48px] rounded-full px-4 md:px-6 py-3 gap-[10px] whitespace-nowrap"
          >Policy</a>
        </nav>

        {/* 桌面端右侧按钮 */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6">
          {/* 下载App按钮 - 使用文本按钮代替图片按钮 */}
          <a
            href="#appstore"
            className="bg-white text-black font-medium transition-colors flex items-center justify-center h-[48px] px-6 py-1.5 rounded-full min-w-[134px]"
            aria-label="Download on the App Store"
          >
            <Image
              src="/images/icon/icon_btn_navbar_download.png"
              alt="App Store"
              width={150}
              height={40}
              className="mr-2"
            />
          </a>
        </div>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a
              href="/product"
              className="text-black hover:text-black transition-colors font-medium flex items-center justify-center py-2 rounded-full px-4 md:px-6 py-3 gap-[10px] w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="/about"
              className="text-black hover:text-black transition-colors font-medium flex items-center justify-center py-2 rounded-full px-4 md:px-6 py-3 gap-[10px] w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-black hover:text-black transition-colors font-medium flex items-center justify-center py-2 rounded-full px-4 md:px-6 py-3 gap-[10px] w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              href="/policy"
              className="text-black hover:text-black transition-colors font-medium flex items-center justify-center py-2 rounded-full px-4 md:px-6 py-3 gap-[10px] w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Policy
            </a>
            <div className="flex flex-col space-y-4 mt-2">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors flex items-center justify-center w-full h-[48px] rounded-[72px] px-6 py-3"
              >
                Download APP
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;