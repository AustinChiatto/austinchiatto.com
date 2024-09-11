import ProjectGrid from '@/components/ProjectGrid/ProjectGrid';
import SideBar from '@/components/SideBar';
import { portfolioData } from '@/data/content';

export default function Home() {
  return (
    <main className="grid grid-cols-12 overflow-hidden">
      <SideBar content={portfolioData} />
      <ProjectGrid projects={portfolioData.projects} />
    </main>
  );
}
