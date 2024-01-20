import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Search } from '@/components/Search';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Search />
      </main>
    </>
  );
}
