import React from 'react';

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`px-6 bg-black rounded-[10px] flex items-center justify-center gap-2 hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.Icon = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-5 h-5" />;
};

Button.Label = ({ children, className = "" }) => {
  return (
    <h5 className={`font-golos font-bold text-[16px] text-white ${className}`}>
      {children}
    </h5>
  );
};

export default Button;
