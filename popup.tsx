import React, { useState } from 'react';
import "./style.css";
import SmoothParticle from './components/SmoothParticle';
import QRcode from "data-base64:~assets/QRcode.png"


const IndexPopup = () => {
  const [inputValue, setInputValue] = useState('');

  return <>
    <div className="w-80 h-[35rem] ">
    <SmoothParticle/>
      <div className="w-80 h-full relative overflow-y-scroll no-scrollbar flex flex-col p-5 animate-fadeIn bg-opacity-70 bg-indigo-900  animate-colorShift">
        <h1 className="text-white text-2xl font-semibold text-center mb-5 animate-float">
          请输入密钥
        </h1>
        <div className="relative mb-4 animate-pulse">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full py-3 px-4 bg-white bg-opacity-10 border border-indigo-300 rounded-md text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 animate-glowBorder"
            placeholder="在此输入您的密钥"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-300 animate-float">
            🔑
          </span>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 px-5 rounded-md cursor-pointer text-base transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none ">
          保存
        </button>
        <p className="mt-5 text-sm text-white text-opacity-80 leading-relaxed animate-fadeIn ">
          密钥可直接使用 openai key , 也可 +V 获取特价 key ，最高官方价五折优惠
        </p>
        <div className="flex-grow flex items-center justify-center bg-white bg-opacity-10 rounded-md text-white text-opacity-60 italic mt-5 animate-glowBorder">
          <img src={QRcode} alt='QR code'/>
        </div>
      </div>
    </div>
  </>;
};

export default IndexPopup;