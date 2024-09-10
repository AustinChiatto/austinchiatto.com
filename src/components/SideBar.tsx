import { PortfolioData } from '@/data/content';
import ToolBar from './ToolBar/ToolBar';

type Props = {
  content: PortfolioData;
};

const SideBar = ({ content }: Props) => {
  const intro = content.intro;

  return (
    <aside className="col-span-12 lg:col-span-4 xl:col-span-3 p-4 md:p-6 lg:min-h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className=" text-foreground">{intro.heading}</h1>
          <h2>{intro.subheading}</h2>
        </div>
        <p>{intro.bio}</p>
        <p>{intro.employment}</p>
      </div>
      <ToolBar contacts={content.contacts} />
    </aside>
  );
};

export default SideBar;
