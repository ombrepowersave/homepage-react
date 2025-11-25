'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ROI: React.FC = () => {
  // 表单状态管理
  const [zipCode, setZipCode] = useState('');
  const [deviceConsumption, setDeviceConsumption] = useState('');
  const [electricCarKm, setElectricCarKm] = useState('');
  const [hvacHours, setHvacHours] = useState('');

  // 表单提交处理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', { zipCode, deviceConsumption, electricCarKm, hvacHours });
  };

  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    }}>
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/img_home_bg_roi_1920_1080.png"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Energy Calculator 表单容器 - 网格定位 */}
      <div className="absolute top-[20%] bottom-[20%] left-[25%] right-[25%] z-10 flex flex-col p-8 rounded-xl">
        {/* 大标题部分 */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold text-black">Energy Calculator</h2>
          </div>
        </div>

        {/* 小标题部分 */}
        <div className="text-center mb-2">
          <p className="text-xl font-bold text-gray-500">Download The App For Estimated Benefits For Families</p>
        </div>

        {/* 表单部分 */}
        <form onSubmit={handleSubmit} className="relative h-full">
          {/* 地址信息部分 - 网格定位：顶部到1/4处 */}
          <div className="absolute top-0 bottom-[75%] left-0 right-0 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Where do you live?</h3>
            <div className="mb-3">
              <label htmlFor="zipCode" className="sr-only">ZIP code</label>
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="ZIP code*"
                required
                className="w-full px-5 py-4 rounded-xl bg-gray-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* 设备使用信息部分 - 网格定位：1/4到3/4处 */}
          <div className="absolute top-[22%] bottom-[25%] left-0 right-0 flex flex-col justify-between py-4">
            <h3 className="text-xl font-bold text-gray-700 mb-2">What devices do you use?</h3>
            
            <div className="space-y-6">
              <div className="mb-2">
                <label htmlFor="deviceConsumption" className="block text-base font-semibold text-gray-700 mb-2"></label>
                <input
                  type="number"
                  id="deviceConsumption"
                  value={deviceConsumption}
                  onChange={(e) => setDeviceConsumption(e.target.value)}
                  placeholder="Enter your devices daily electricity consumption (Optional)"
                  className="w-full px-5 py-4 rounded-xl bg-gray-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="electricCarKm" className="block text-base font-semibold text-gray-700 mb-2"></label>
                <input
                  type="number"
                  id="electricCarKm"
                  value={electricCarKm}
                  onChange={(e) => setElectricCarKm(e.target.value)}
                  placeholder="Enter your electric car daily kilometers (Optional)"
                  className="w-full px-5 py-4 rounded-xl bg-gray-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="hvacHours" className="block text-base font-semibold text-gray-700 mb-2"></label>
                <input
                  type="number"
                  id="hvacHours"
                  value={hvacHours}
                  onChange={(e) => setHvacHours(e.target.value)}
                  placeholder="Enter your HVAC hours of use per day (Optional)"
                  className="w-full px-5 py-4 rounded-xl bg-gray-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  min="0"
                  step="0.5"
                />
              </div>
            </div>
          </div>

          {/* 提交按钮部分 - 网格定位：3/4到底部 */}
          <div className="absolute top-[85%] bottom-0 left-0 right-0 flex items-center justify-center">
            <button 
              type="submit"
              className=" transform transition-all duration-300 hover:scale-105 bg-transparent flex justify-center"
            >
              <Image
                src="/images/icon_btn_roi_submit.png"
                alt="Estimate your earnings"
                width={800}
                height={150}
                className="rounded-lg object-contain mx-auto"
                sizes="(max-width: 640px) 90%, 300px"
                priority
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ROI;