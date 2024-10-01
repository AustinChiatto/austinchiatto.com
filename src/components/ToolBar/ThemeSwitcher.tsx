'use client';
import { useState } from 'react';
import Icon from '../Icon';
import { useTheme } from '@/context/ThemeContext';

const themes = ['light', 'terracotta', 'plum', 'grape', 'mint', 'ocean', 'dark'] as const;

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
      <ul className="w-full flex flex-col gap-3 justify-center">
        {themes.map((t) => (
          <li
            key={t}
            onMouseDown={() => setTheme(t)}
            className={`group aspect-square grid place-items-center p-2 bg-background rounded-md ${
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
    <button
      onMouseDown={handleToggle}
      className="relative h-full aspect-square grid place-items-center border border-border rounded-lg bg-background transition-shadow hover:shadow-md hover:text-foreground"
    >
      {palette}
      <Icon name="palette" />
    </button>
  );
};

export default ThemeSwitcher;
