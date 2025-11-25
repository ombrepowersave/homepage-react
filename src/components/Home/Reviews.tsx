'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// 模拟评论数据
const mockReviews = [
  {
    id: 1,
    name: "Joel N.",
    rating: 5,
    comment: "I'm an accountant/finance person and didn't think I would have much use for this app. I was wrong. The app keeps track of all my expenses, tells me when there is a difference in bills, helps me lower bills that are too high compared to other people, and does all of that and more in a simple to understand dashboard."
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    comment: "This app has completely changed how I manage my home electricity. The insights are incredibly helpful and the savings have been substantial. Highly recommended for anyone looking to take control of their energy usage."
  },
  {
    id: 3,
    name: "Michael R.",
    rating: 5,
    comment: "The predictive analytics feature is mind-blowing. It accurately forecasted my electricity needs and helped me avoid peak pricing. Customer support is also excellent and very responsive."
  },
  {
    id: 4,
    name: "Emily L.",
    rating: 5,
    comment: "As someone who travels frequently, being able to monitor and control my home energy usage remotely has been a game-changer. The app is intuitive and the interface is clean and user-friendly."
  },
  {
    id: 5,
    name: "David K.",
    rating: 5,
    comment: "Within just two months of using this app, I've reduced my electricity bill by 23%. The personalized recommendations are spot on and easy to implement. Worth every penny (which is nothing since it's free!)."
  }
];

const Reviews: React.FC = () => {
  // 为左右两部分分别设置状态
  const [leftColumnReviews, setLeftColumnReviews] = useState(mockReviews.slice(0, 2)); // 左侧两列评论
  const [rightColumnReviews, setRightColumnReviews] = useState(mockReviews.slice(2, 4)); // 右侧两列评论
  const [leftIndex, setLeftIndex] = useState(0); // 左侧滚动索引
  const [rightIndex, setRightIndex] = useState(2); // 右侧滚动索引

  // 左侧评论滚动效果（自上而下）
  useEffect(() => {
    const leftInterval = setInterval(() => {
      // 计算新的左侧索引，实现自上而下滚动
      const newIndex = (leftIndex + 2) % mockReviews.length;
      setLeftIndex(newIndex);
      
      // 准备下一批评论，每次替换2条
      const nextReviews = [
        mockReviews[newIndex % mockReviews.length],
        mockReviews[(newIndex + 1) % mockReviews.length]
      ];
      
      // 先应用向上移出的动画
      const elements = document.querySelectorAll('[key^="left-"]');
      elements.forEach(el => {
        (el as HTMLElement).style.transform = 'translateY(-100px)';
        (el as HTMLElement).style.opacity = '0';
      });
      
      // 延迟后更新内容并应用新的动画
      setTimeout(() => {
        setLeftColumnReviews(nextReviews);
        // 重置动画状态
        setTimeout(() => {
          const newElements = document.querySelectorAll('[key^="left-"]');
          newElements.forEach(el => {
            (el as HTMLElement).style.transform = 'translateY(0)';
            (el as HTMLElement).style.opacity = '1';
          });
        }, 50);
      }, 500);
    }, 5000); // 每5秒滚动一次

    return () => clearInterval(leftInterval);
  }, [leftIndex]);

  // 右侧评论滚动效果（自下而上）
  useEffect(() => {
    const rightInterval = setInterval(() => {
      // 计算新的右侧索引，实现自下而上滚动
      const newIndex = (rightIndex + 2) % mockReviews.length;
      setRightIndex(newIndex);
      
      // 准备下一批评论，每次替换2条
      const nextReviews = [
        mockReviews[newIndex % mockReviews.length],
        mockReviews[(newIndex + 1) % mockReviews.length]
      ];
      
      // 先应用向下移出的动画
      const elements = document.querySelectorAll('[key^="right-"]');
      elements.forEach(el => {
        (el as HTMLElement).style.transform = 'translateY(100px)';
        (el as HTMLElement).style.opacity = '0';
      });
      
      // 延迟后更新内容并应用新的动画
      setTimeout(() => {
        setRightColumnReviews(nextReviews);
        // 重置动画状态
        setTimeout(() => {
          const newElements = document.querySelectorAll('[key^="right-"]');
          newElements.forEach(el => {
            (el as HTMLElement).style.transform = 'translateY(0)';
            (el as HTMLElement).style.opacity = '1';
          });
        }, 50);
      }, 500);
    }, 5000); // 每5秒滚动一次

    return () => clearInterval(rightInterval);
  }, [rightIndex]);

  return (
    <div className="bg-white rounded-xl shadow-sm my-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* 左侧标题和文字部分 */}
        <div className="h-full flex items-center">
          <div className="w-full pl-[20%] pr-[10%] pt-[20%] pb-[20%]">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Feel the love</h2>
            <p className="text-gray-600 mb-6">
              No Need To Take Our Word For It! Here's Just A Few Of Our Thousands Of 5 Star Reviews
            </p>
            <div className="flex gap-1 mb-4">
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
            <p className="text-sm text-gray-500 italic">
              *Reviews May Have Been Edited For Clarity And/Or Conciseness.
            </p>
          </div>
        </div>
        
        {/* 右侧评论展示部分 */}
        <div className="h-full pl-[10%] pr-[20%] pt-[10%] pb-[10%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* 左侧评论列 - 自上而下滚动 */}
            <div className="flex flex-col gap-8">
              {leftColumnReviews.map((review) => (
                <div 
                  key={`left-${review.id}`} 
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:translate-y-[-5px]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-gray-800">{review.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Image
                          key={i}
                          src="/images/icon_lab_star.png"
                          alt="Star"
                          width={16}
                          height={16}
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>

            {/* 右侧评论列 - 自下而上滚动 */}
            <div className="flex flex-col gap-8">
              {rightColumnReviews.map((review) => (
                <div 
                  key={`right-${review.id}`} 
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:translate-y-[-5px]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-gray-800">{review.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Image
                          key={i}
                          src="/images/icon_lab_star.png"
                          alt="Star"
                          width={16}
                          height={16}
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;