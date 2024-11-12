import { Contacts } from '@/data/content';
import ContactModal from './ContactModal';
import ThemeSwitcher from './ThemeSwitcher';

type Props = {
  contacts: Contacts[];
};

const ToolBar = ({ contacts }: Props) => {
  return (
    <div className="w-full flex md:justify-center gap-2 fixed lg:relative bottom-0 left-0 right-0 lg:relative lg:bottom-[unset] left-[unset] z-50 p-4 px-6 lg:p-0 ">
      <ContactModal contacts={contacts} />
      <ThemeSwitcher />
    </div>
  );
};

export default ToolBar;
