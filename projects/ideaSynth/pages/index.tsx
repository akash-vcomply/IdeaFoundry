import IdeaList from '../components/IdeaList';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">IdeaSynth Dashboard</h1>
      <IdeaList />
    </main>
  );
}
