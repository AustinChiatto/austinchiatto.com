import SideBar from '@/components/SideBar/SideBar';
import { portfolioData } from '@/data/content';

export default function Home() {
  return (
    <main className="grid grid-cols-12">
      <SideBar content={portfolioData} />
      <section className="col-span-12 lg:col-span-8 xl:col-span-9 p-4 md:p-6 pl-0 md:pl-0 lg:h-screen lg:max-h-screen lg:overflow-y-scoll"></section>
    </main>
  );
}
