import { robotoMono } from '@/data/fonts';

const Badge = ({ label, alt }: { label: string; alt?: boolean }) => {
  return (
    <span
      className={`block px-2.5 py-[0.375rem] bg-background text-secondary rounded-sm text-xs lowercase font-medium ${
        alt && 'bg-foreground text-background'
      }`}
      style={{ fontFamily: robotoMono.style.fontFamily }}
    >
      {label}
    </span>
  );
};

export default Badge;
