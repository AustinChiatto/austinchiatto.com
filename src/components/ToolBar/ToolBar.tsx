'use client';
import { Contacts } from '@/data/content';

type Props = {
  contacts: Contacts[];
};

const ToolBar = ({ contacts }: Props) => {
  return (
    <div className="w-full flex gap-2">
      <button className="flex-1 h-16 px-[1.125rem] py-2.5 text-left border border-border rounded-lg bg-background">Get in touch</button>
      <button className="h-full aspect-square border border-border rounded-lg bg-background">+</button>
    </div>
  );
};

export default ToolBar;
