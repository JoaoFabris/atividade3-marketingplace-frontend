import { useParams, useNavigate } from 'react-router-dom';
import produtosIniciais from '../data/produtos';

function DetalhesProduto({ onAdicionarAoCarrinho }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtosIniciais.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <main className="max-w-md mx-auto px-5 py-10 text-center">
        <p className="mb-4">Produto não encontrado.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-slate-800 text-white rounded px-4 py-2"
        >
          Voltar para a Home
        </button>
      </main>
    );
  }

  function handleAdicionar() {
    onAdicionarAoCarrinho(produto);
    navigate('/carrinho', { state: { produtoAdicionado: produto.nome } });
  }

  return (
    <main className="max-w-md mx-auto px-5 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-slate-800 text-sm mb-3"
      >
        ← Voltar
      </button>

      <div className="relative bg-white border border-gray-200 rounded-lg p-6">
        {produto.promocao && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded">
            PROMOÇÃO
          </span>
        )}
        <h2 className="text-xl font-bold">{produto.nome}</h2>
        <p className="text-gray-500 text-sm my-1">{produto.categoria}</p>
        <p className="text-2xl font-bold text-slate-800 my-2">
          R$ {produto.preco.toFixed(2)}
        </p>
        <p className="text-gray-600 mb-4">
          Este é um produto de alta qualidade da categoria {produto.categoria}.
        </p>
        <button
          onClick={handleAdicionar}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded p-2 transition-colors"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </main>
  );
}

export default DetalhesProduto;
