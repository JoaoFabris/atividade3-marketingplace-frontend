const IMAGEM_PADRAO = 'https://placehold.co/400x300?text=Sem+Imagem';

function ProdutoCard({ produto }) {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
      <div className="relative">
        {produto.promocao && (
          <span className="absolute top-3 left-3 bg-unyleya-magenta text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
            PROMOÇÃO
          </span>
        )}

        <img
          src={produto.imagem || IMAGEM_PADRAO}
          alt={produto.nome}
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = IMAGEM_PADRAO;
          }}
        />
      </div>

      <div className="p-4">
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-lg text-unyleya-primary">
            R$ {produto.preco.toFixed(2)}
          </span>
          {produto.precoOriginal && (
            <span className="text-sm text-gray-400 line-through">
              R$ {produto.precoOriginal.toFixed(2)}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-slate-800 mt-1">{produto.nome}</h3>
        <p className="text-gray-400 text-sm">{produto.categoria}</p>
      </div>
    </div>
  );
}

export default ProdutoCard;
