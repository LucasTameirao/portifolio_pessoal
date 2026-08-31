import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  allowUploadPreview?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'lg',
  className = '',
  allowUploadPreview = true,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(PERSONAL_INFO.avatar || null);
  const [hasError, setHasError] = useState(false);

  // Manipulador para quando o usuário seleciona uma foto local para pré-visualização imediata
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImageSrc(previewUrl);
      setHasError(false);
    }
  };

  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-40 h-40 sm:w-48 sm:h-48',
    lg: 'w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72',
    xl: 'w-64 h-64 sm:w-80 sm:h-80',
  }[size];

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Outer subtle glow/halo ring */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/20 via-orange-500/20 to-indigo-500/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Avatar Circular Container */}
      <div className={`relative ${sizeClasses} rounded-full overflow-hidden bg-[#f4f2f7] border-4 border-slate-700/60 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400/40`}>
        {imageSrc && !hasError ? (
          <img
            src={imageSrc}
            alt={PERSONAL_INFO.name}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder Idêntico ao Wireframe (Silhueta minimalista com tons suaves) */
          <div className="w-full h-full flex items-center justify-center bg-[#f7f5fa] relative select-none">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-[#6b6676]"
              fill="currentColor"
            >
              {/* Head Circle */}
              <circle cx="100" cy="72" r="32" stroke="currentColor" strokeWidth="14" fill="none" />
              {/* Shoulders / Body Curve */}
              <path
                d="M 32 176 C 32 128, 62 124, 100 124 C 138 124, 168 128, 168 176"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        )}

        {/* Hover overlay para testar/trocar foto instantaneamente */}
        {allowUploadPreview && (
          <label
            htmlFor="avatar-upload"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200 text-center p-3"
            title="Clique para testar uma foto sua"
          >
            <Camera className="w-6 h-6 text-cyan-400 mb-1" />
            <span className="text-[11px] font-medium font-mono text-cyan-200">
              {imageSrc && !hasError ? 'Alterar foto' : 'Subir minha foto'}
            </span>
            <span className="text-[9px] text-slate-400 mt-0.5">
              (ou salve em public/avatar.png)
            </span>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};
