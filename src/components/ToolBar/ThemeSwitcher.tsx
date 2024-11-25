'use client';
import { useRef, useState } from 'react';
import Icon from '../Icon';
import { useTheme } from '@/context/ThemeContext';
import { useClickOutside } from '@/hooks/useClickOutside';

const themes = ['light', 'terracotta', 'plum', 'grape', 'mint', 'ocean', 'dark'] as const;

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const paletteRef = useRef(null);

  useClickOutside(paletteRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const palette = (
    <div
      onMouseLeave={handleToggle}
      className={`absolute left-[-1px] right-[-1px] bottom-[-1px] p-2.5 border border-border rounded-lg bg-background transition-all duration-300 ${
        isOpen ? 'opacity-1' : 'translate-y-1 opacity-0 pointer-events-none'
      }`}
    >
      <ul
        className="w-full flex flex-col gap-3 justify-center"
        ref={paletteRef}
      >
        {themes.map((t) => (
          <li
            key={t}
            onClick={() => setTheme(t)}
            className={`group w-full aspect-square grid place-items-center cursor-pointer p-2 bg-background rounded-md ${
              theme === t ? 'ring-1 ring-foreground' : 'border border-border'
            }`}
            data-theme={t}
          >
            <Icon
              name="palette"
              className="text-secondary-foreground transition-colors group-hover:text-foreground"
            />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative min-h-16 h-full">
      <button
        onClick={handleToggle}
        className="min-h-16 h-full aspect-square grid place-items-center border border-border rounded-lg bg-background transition-shadow hover:shadow-md hover:text-foreground"
      >
        <Icon name="palette" />
      </button>
      {palette}
    </div>
  );
};

export default ThemeSwitcher;
