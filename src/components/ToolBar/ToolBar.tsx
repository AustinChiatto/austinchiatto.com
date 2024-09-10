import { Contacts } from '@/data/content';
import ContactModal from './ContactModal';

type Props = {
  contacts: Contacts[];
};

const ToolBar = ({ contacts }: Props) => {
  return (
    <div className="w-full flex gap-2">
      <ContactModal contacts={contacts} />
      <button className="h-full aspect-square border border-border rounded-lg bg-background">+</button>
    </div>
  );
};

export default ToolBar;
