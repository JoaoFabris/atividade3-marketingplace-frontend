import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="max-w-md mx-auto px-5 py-16 text-center">
      <h2 className="text-6xl font-bold text-red-500">404</h2>
      <p className="mt-3 mb-5">Ops! Essa página não existe.</p>
      <Link to="/" className="text-slate-800 hover:underline">
        Voltar para a Home
      </Link>
    </main>
  );
}

export default NotFound;
