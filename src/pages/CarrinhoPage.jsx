import { useLocation, Link } from 'react-router-dom';
import Carrinho from '../components/Carrinho';

function CarrinhoPage({ itens, onRemover }) {
  const location = useLocation();
  const mensagem = location.state?.produtoAdicionado;

  return (
    <main className="max-w-md mx-auto px-5 py-8">
      {mensagem && (
        <p className="bg-green-100 text-green-800 rounded p-3 mb-4 text-sm">
          ✅ "{mensagem}" foi adicionado ao carrinho!
        </p>
      )}

      <Carrinho itens={itens} onRemover={onRemover} />

      <Link to="/" className="inline-block mt-4 text-slate-800 hover:underline">
        ← Continuar comprando
      </Link>
    </main>
  );
}

export default CarrinhoPage;
