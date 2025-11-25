'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Booking: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="booking relative w-full h-screen">
        
        <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/img_home_bg_booking_1920_1080.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
        </div>


      {/* 主要内容容器 - 调整为更接近设计稿的尺寸和位置
          设计稿中的左侧起始位置约为 360px，在 1920px 宽度下大约是 left-[18.75%]
          主要内容宽度约 746px (小标题宽度)，大约是 w-[38.8%]
          整体容器的位置设置为 left-[18.75%] (接近 20%)，w-[38.8%] (接近 40%)，top-[20%]，h-[60%]
          实际布局将使用绝对定位和精确的像素值，以更精确地匹配设计稿的坐标。
          但为了保持响应式，我们使用百分比，并调整子元素样式。
      */}
      {/* 相对定位的父容器 */}
      <div className="relative w-full h-full"> 
        {/* 调整容器位置和大小 */}
        <div className="absolute w-[35%] h-[60%] top-[20%] left-[20%]"> 
          {/* 四栏布局 */}
          <div className="flex flex-col justify-start h-full">
            {/* 第一栏 */}
            <div className="flex items-center" style={{ height: '22%' }}>
              {/* Logo 尺寸 132x132px, 颜色 #00C6AE */}
              <div className=" rounded-2xl w-[135px] h-[135px] flex items-center justify-center">
                <Image
                  src="/images/icon/icon_logo.png" // 使用设计稿中 logo 的原始尺寸图片
                  alt="Logo"
                  width={135}
                  height={135}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* 第二栏：大标题 */}
            <div className="" style={{ height: '23%', paddingTop: '15px' }}> {/* 调整间距 */}
              <h1 className="text-5xl font-extrabold text-black leading-tight"> {/* 调整字号和字重 */}
                Book an APP internal
              </h1>
              <h1 className="text-5xl font-extrabold text-black leading-tight"> {/* 调整字号和字重 */}
                test now
              </h1>
            </div>
            
            {/* 第三栏：小标题 */}
            <div className="" style={{ height: '15%', paddingTop: '15px' }}> {/* 调整间距 */}
              <p className="text-xl text-black font-bold leading-normal"> {/* 调整字号和颜色 */}
                Get A Live, Personalised Demo With One Of<br />
                Our Awesome Product Specialists.
              </p>
            </div>
            
            {/* 第四栏：表单，高度约为 115px / (1080px * 0.6) ≈ 18% + 提示文字 */}
            <div className="flex flex-col justify-start" style={{ height: '40%', paddingTop: '20px' }}> {/* 调整间距 */}
              <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                  {/* 输入框宽度约 708px - 提交按钮宽度, 高度 115px */}
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-8 py-4 text-xl border border-gray-300 rounded-l-[10px] focus:outline-none focus:ring-2 focus:ring-[#00C6AE]"
                    style={{ height: '65px', minWidth: '350px' }} // 调整高度和最小宽度
                  />
                  <button
                    type="submit"
                    className="bg-[#00C6AE] text-white font-bold py-4 px-10 hover:bg-[#00b39c] transition-colors whitespace-nowrap rounded-r-[10px] rounded-l-none text-xl"
                    style={{
                      height: '65px', 
                      width: '170px',
                      backgroundImage: `url(/images/icon/icon_btn_submit.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      color: 'white'
                    }}
                  >
                    Submit
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  By Providing Your Email, You Agree To The <a href="#" className="text-[#00C6AE] font-semibold hover:underline">Quartz Privacy Policy.</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;