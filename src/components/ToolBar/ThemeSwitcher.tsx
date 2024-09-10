'use client';
import { useState } from 'react';
import Icon from '../Icon';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const palette = (
    <div
      onMouseLeave={handleToggle}
      className={`absolute left-[-1px] right-[-1px] bottom-[-1px] p-2.5 border border-border rounded-lg bg-background transition-all ${
        isOpen ? 'opacity-1' : 'translate-y-1 opacity-0 pointer-events-none'
      }`}
    >
      <ul className="w-full flex flex-col gap-3 justify-center">
        {/* todo: create map when themes have been added */}
        <li className="aspect-square grid place-items-center p-2 rounded-sm">
          <Icon name="palette" />
        </li>
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
