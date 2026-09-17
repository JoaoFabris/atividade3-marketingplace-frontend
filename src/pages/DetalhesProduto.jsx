import { useParams, useNavigate } from 'react-router-dom';

const IMAGEM_PADRAO = 'https://placehold.co/400x300?text=Sem+Imagem';

function DetalhesProduto({ produtos, onAdicionarAoCarrinho }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find((p) => p.id === Number(id));

  if (!produto) {
    return (
      <div className="max-w-md mx-auto px-5 py-10 text-center">
        <p className="mb-4">Produto não encontrado.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-slate-800 text-white rounded px-4 py-2"
        >
          Voltar para a Home
        </button>
      </div>
    );
  }

  function handleAdicionar() {
    onAdicionarAoCarrinho(produto);
    navigate('/carrinho', { state: { produtoAdicionado: produto.nome } });
  }

  return (
    <div className="max-w-md mx-auto px-5 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-slate-800 text-sm mb-3"
      >
        Voltar
      </button>

      <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden">
        {produto.promocao && (
          <span className="absolute top-3 right-3 bg-unyleya-magenta text-white text-xs font-bold px-2.5 py-1 rounded z-10">
            PROMOÇÃO
          </span>
        )}

        <img
          src={produto.imagem || IMAGEM_PADRAO}
          alt={produto.nome}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = IMAGEM_PADRAO;
          }}
        />

        <div className="p-6">
          <h2 className="text-xl font-bold">{produto.nome}</h2>
          <p className="text-gray-500 text-sm my-1">{produto.categoria}</p>
          <div className="flex items-baseline gap-2 my-2">
            <span className="text-2xl font-bold text-unyleya-primary">
              R$ {produto.preco.toFixed(2)}
            </span>
            {produto.precoOriginal && (
              <span className="text-base text-gray-400 line-through">
                R$ {produto.precoOriginal.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-4">
            Este é um produto de alta qualidade da categoria {produto.categoria}
            .
          </p>
          <button
            onClick={handleAdicionar}
            className="w-full bg-unyleya-coral hover:bg-unyleya-coralDark text-white rounded p-2 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProduto;
