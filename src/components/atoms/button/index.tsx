import React from 'react';

export type ImageButtonProps = {
  src: string;
  alt: string;
};

export type ButtonProps = {
  children?: React.ReactNode;
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
  image?: ImageButtonProps;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  variant,
  disabled,
  image,
  onClick,
}) => {
  let className = 'flex-1 p-6 text-2xl';

  switch (variant) {
    case 'primary':
      className +=
        ' bg-emerald-400 text-white flex justify-center items-center';
      break;
    case 'secondary':
      className +=
        ' text-slate-800 flex justify-center items-center border border-solid border-slate-400';
      break;
    // case 'accent':
    //   className += ' btn-accent';
    //   break;
    default:
      className +=
        ' bg-emerald-400 text-white flex justify-center items-center';
      break;
  }

  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        onClick={onClick}
        style={{ cursor: 'pointer', width: '100px', height: '50px' }}
      />
    );
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      title={label}
    >
      {label || children}
    </button>
  );
};
