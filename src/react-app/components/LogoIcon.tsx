interface LogoIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LogoIcon({ size = 'md', className = '' }: LogoIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        className="w-full h-full"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle 
          cx="20" 
          cy="20" 
          r="19" 
          fill="url(#logoGradient)" 
          filter="url(#glow)"
        />
        
        {/* Letter A */}
        <path 
          d="M12 28 L16 16 L20 28 M14 24 L18 24" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Letter S */}
        <path 
          d="M24 17 C24 15 25 14 27 14 C29 14 30 15 30 17 C30 19 29 20 27 20 C25 20 24 21 24 23 C24 25 25 26 27 26 C29 26 30 25 30 23" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Connecting element */}
        <circle cx="22" cy="20" r="1" fill="white" opacity="0.8" />
      </svg>
    </div>
  );
}
