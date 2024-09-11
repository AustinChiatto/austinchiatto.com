import { Roboto_Mono as FontMono } from 'next/font/google';

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const Badge = ({ label }: { label: string }) => {
  return (
    <span
      className="px-2.5 py-[0.375rem] bg-background text-secondary rounded-sm text-xs lowercase font-medium"
      style={{ fontFamily: fontMono.style.fontFamily }}
    >
      {label}
    </span>
  );
};

export default Badge;
