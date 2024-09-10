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
        xs: '12px',
        sm: '16px'
      },
      fontWeight: {
        normal: '400'
      },
      boxShadow: {
        md: '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px 2.039px 2.002px 0px rgba(0, 0, 0, 0.04), 0px 0.578px 0.606px 0px rgba(0, 0, 0, 0.02)',
        lg: '0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02)'
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
