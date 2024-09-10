import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'secondary-background': 'hsl(var(--secondary-background))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))'
      },
      fontSize: {
        sm: '16px'
      },
      fontWeight: {
        normal: '400'
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.625rem',
        lg: '1.125rem'
      }
    }
  },
  plugins: []
};
export default config;
