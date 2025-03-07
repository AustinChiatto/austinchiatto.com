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

  const palette = (
    <div
      onMouseLeave={() => setIsOpen((prevState) => !prevState)}
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
            className={`w-full aspect-square group grid place-items-center cursor-pointer p-2 bg-background rounded-md transition-all hover:scale-[1.05] ${
              theme === t ? 'ring-1 ring-foreground rounded-xl' : 'border border-border'
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
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="min-h-16 h-full aspect-square grid place-items-center border border-border rounded-lg transition-colors bg-background hover:bg-secondary-background hover:text-foreground"
      >
        <Icon name="palette" />
      </button>
      {palette}
    </div>
  );
};

export default ThemeSwitcher;
