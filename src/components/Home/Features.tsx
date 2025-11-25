'use client'
import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <section className="features py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 第一栏：左侧文字，右侧图片 */}
        <div className="feature-section mb-20">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold text-black mb-5">
                AI scheduling Electricity to
                <br />
                help you save on 
                <br />
                electricity bills
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_checked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Personalized energy management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Policy transparency</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Emergency management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Cross-brand collaboration</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/img_home_feature_1.png"
                  alt="AI Scheduling"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 第二栏：左侧图片，右侧文字 */}
        <div className="feature-section mb-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold text-gray-600 mb-8">
                Power saving and
                scheduling logic
                visualization
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Personalized energy management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_checked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Policy transparency</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Emergency management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Cross-brand collaboration</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/img_home_feature_2.png"
                  alt="Power Saving Visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 第三栏：左侧文字，右侧图片 */}
        <div className="feature-section mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-3xl text-gray-600 mb-8">
                Push power outage warnings
                in advance and reserve
                emergency energy for
                households
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Personalized energy management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-gray-700">Policy transparency</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_checked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Emergency management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Cross-brand collaboration</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/img_home_feature_3.png"
                  alt="Power Outage Warning"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 第四栏：左侧图片，右侧文字 */}
        <div className="feature-section">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold text-gray-600 mb-8">
                Multi-device
                collaboration, worry-free
                gentle, unaffected,
                intelligent collaboration
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Personalized energy management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Policy transparency</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_unchecked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Emergency management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src="/images/icon/icon_lab_checked.png"
                    alt="checked"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-lg text-gray-700">Cross-brand collaboration</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/img_home_feature_4.png"
                  alt="Multi-device Collaboration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;