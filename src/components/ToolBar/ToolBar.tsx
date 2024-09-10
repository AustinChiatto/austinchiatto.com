import { Contacts } from '@/data/content';
import ContactModal from './ContactModal';
import ThemeSwitcher from './ThemeSwitcher';

type Props = {
  contacts: Contacts[];
};

const ToolBar = ({ contacts }: Props) => {
  return (
    <div className="w-full flex gap-2">
      <ContactModal contacts={contacts} />
      <ThemeSwitcher />
    </div>
  );
};

export default ToolBar;
