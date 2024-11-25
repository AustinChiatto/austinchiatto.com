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
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        border: 'hsl(var(--border))'
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
        lg: '0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02)',
        inset: 'inset 0 0 0 4px hsl(var(--border) / 0.5)'
      },
      dropShadow: {
        md: ['0px 4px 10px rgba(0, 0, 0, 0.06)', '0px 2.039px 2.002px rgba(0, 0, 0, 0.04)', '0px 0.578px 0.606px rgba(0, 0, 0, 0.02)'],
        lg: [
          '0px 41.778px 33.422px rgba(0, 0, 0, 0.05)',
          '0px 22.336px 17.869px rgba(0, 0, 0, 0.04)',
          '0px 12.522px 10.017px rgba(0, 0, 0, 0.04)',
          '0px 6.65px 5.32px rgba(0, 0, 0, 0.03)',
          '0px 2.767px 2.214px rgba(0, 0, 0, 0.02)'
        ]
      },
      borderRadius: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1.125rem'
      },
      fontFamily: {
        secondary: 'var(--font-mono)'
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fling:
          'linear(0 0%, 0.00935 1%, 0.034933 2%,0.073343 3%,0.121559 4%,0.176933 5%,0.237164 6%,0.300282 7.000000000000001%,0.364621 8%,0.428795 9%,0.491674 10%,0.552354 11%,0.610135 12%,0.664498 13%,0.715078 14.000000000000002%,0.761645 15%,0.804085 16%,0.842377 17%,0.87658 18%,0.906817 19%,0.933259 20%,0.956116 21%,0.975624 22%,0.992037 23%,1.005618 24%,1.016636 25%,1.025356 26%,1.032036 27%,1.036926 28.000000000000004%,1.040261 28.999999999999996%,1.042263 30%,1.043137 31%,1.043072 32%,1.04224 33%,1.040793 34%,1.038871 35%,1.036594 36%,1.034067 37%,1.031382 38%,1.028616 39%,1.025833 40%,1.023087 41%,1.020422 42%,1.017869 43%,1.015456 44%,1.013201 45%,1.011116 46%,1.009207 47%,1.007478 48%,1.005927 49%,1.00455 50%,1.00334 51%,1.002289 52%,1.001387 53%,1.000624 54%,0.999987 55.00000000000001%'
      }
    }
  },
  plugins: []
};
export default config;
