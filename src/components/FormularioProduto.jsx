import { useState } from 'react';

function FormularioProduto({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !preco || !categoria) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      categoria,
      promocao: false,
    };

    onCadastrar(novoProduto);
    setNome('');
    setPreco('');
    setCategoria('');
  }

  return (
    <form
      className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-bold">Cadastrar novo produto</h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border border-gray-300 rounded p-2 text-sm"
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        step="0.01"
        min="0"
        className="border border-gray-300 rounded p-2 text-sm"
      />

      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="border border-gray-300 rounded p-2 text-sm"
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white rounded p-2 transition-colors"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default FormularioProduto;
