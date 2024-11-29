'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect } from 'react';

const DynamicFavicon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector('link[rel=icon]');

    if (!favicon) return;

    const faviconMap = {
      light: '/favicon-light.ico',
      dark: '/favicon-dark.ico',
      terracotta: '/favicon-terracotta.ico',
      plum: '/favicon-plum.ico',
      grape: '/favicon-grape.ico',
      mint: '/favicon-mint.ico',
      ocean: '/favicon-ocean.ico'
    };

    favicon.setAttribute('href', faviconMap[theme] || '/favicon-light.ico');
  }, [theme]);

  return null;
};

export default DynamicFavicon;
