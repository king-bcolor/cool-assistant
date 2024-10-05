import { sendToBackground } from '@plasmohq/messaging';
import React from 'react';

export const Menu = ({ style, targetInfo }) => (
  <div onClick={(e) => {
    e.stopPropagation();
  }} 
  
  id="menu" 
  className='fixed bg-white bg-opacity-20 border border-[#9786FA] rounded-md shadow-lg p-2 z-50 min-w-[200px] backdrop-blur-md' style={{ ...style }}>
    {targetInfo && itemConfig().map((item) => {
      return <button key={item.label}
        onClick={() => item.trigger(targetInfo)}
        className='m-0 w-full px-4 py-2 cursor-pointer text-[#1B1340] text-sm hover:bg-[#F0EDFF] hover:bg-opacity-50'>
        {item.label}
      </button>
    })}
  </div>
);


function itemConfig() {
  return [{
    label: '提取成 json',
    trigger: async (targetInfo) => {
      const styleTagRegex = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi;
      const input = targetInfo.replace(styleTagRegex, ''); 
      sendToBackground({
        name:'side-content',
        body:{
          input
        }
      })
    }
  },]
}