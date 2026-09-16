function Carrinho({ itens, onRemover }) {
  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  if (itens.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-lg font-bold mb-2"> Carrinho</h2>
        <p className="text-gray-500 text-sm">Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">🛒 Carrinho ({itens.length})</h2>
      <ul className="my-2">
        {itens.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="flex items-center justify-between text-sm py-2 border-b border-gray-100"
          >
            <span>
              {item.nome} — R$ {item.preco.toFixed(2)}
            </span>
            <button
              onClick={() => onRemover(index)}
              className="text-red-500 hover:text-red-700 text-xs font-semibold ml-3"
              title="Remover item"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <p className="font-bold mt-2">Total: R$ {total.toFixed(2)}</p>
    </div>
  );
}

export default Carrinho;
