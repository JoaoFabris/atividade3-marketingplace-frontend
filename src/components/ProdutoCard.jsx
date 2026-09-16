function ProdutoCard({ produto }) {
  return (
    <div
      className={`relative bg-white rounded-lg p-4 w-full shadow-sm border ${
        produto.promocao
          ? 'border-2 border-red-500 bg-red-50'
          : 'border-gray-200'
      }`}
    >
      {produto.promocao && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          PROMOÇÃO
        </span>
      )}

      <h3 className="font-semibold text-slate-800">{produto.nome}</h3>
      <p className="text-gray-500 text-sm my-1">{produto.categoria}</p>
      <p className="font-bold text-lg text-slate-800">
        R$ {produto.preco.toFixed(2)}
      </p>
    </div>
  );
}

export default ProdutoCard;
