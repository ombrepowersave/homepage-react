import Header from '../components/Header/Header';
import NotFound from '../components/404/NotFound';
import Footer from '../components/Footer/Footer';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <NotFound />
      </main>
      <Footer />
    </div>
  );
}