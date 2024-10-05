import React, { useState } from 'react';

const CopyableText = ({ copyableText }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyableText)
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-text flex items-stretch justify-center min-h-screen p-4 overflow-x-hidden">
      <div className="max-w-lg w-full relative">
        <div className="absolute w-10 h-px bg-white/50 animate-breathe -top-2.5 left-2.5"></div>
        <div className="absolute w-10 h-px bg-white/50 animate-breathe -top-2.5 right-2.5"></div>
        <div className="absolute w-px h-10 bg-white/50 animate-breathe top-2.5 -left-2.5"></div>
        <div className="absolute w-px h-10 bg-white/50 animate-breathe top-2.5 -right-2.5"></div>
        <div className="bg-white/15 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 relative">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">可复制文本</h2>
            <div className="bg-white/10 rounded-lg p-4 mb-4 text-sm leading-relaxed text-white break-words relative">
              {copyableText}
              <div className="absolute w-10 h-px bg-white/50 animate-breathe -bottom-1.5 left-1.5"></div>
              <div className="absolute w-10 h-px bg-white/50 animate-breathe -bottom-1.5 right-1.5"></div>
              <div className="absolute w-px h-10 bg-white/50 animate-breathe bottom-1.5 -left-1.5"></div>
              <div className="absolute w-px h-10 bg-white/50 animate-breathe bottom-1.5 -right-1.5"></div>
            </div>
            <button
              onClick={copyToClipboard}
              className="w-full bg-indigo-600 text-white py-3 px-5 rounded-md cursor-pointer text-base transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-none ">
              复制文本
            </button>
            {showSuccessMessage && (
              <p className="mt-2 text-white font-medium text-center">
                文本已成功复制！
              </p>
            )}
          </div>
        </div>

      </div>

      
    </div>
  );
};

export default CopyableText;
