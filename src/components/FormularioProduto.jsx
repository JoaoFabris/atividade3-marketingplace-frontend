import { useState } from 'react';

function FormularioProduto({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState(null); // agora guarda a imagem convertida (Data URL)
  const [preview, setPreview] = useState(null); // usado só para mostrar a pré-visualização

  // Quando o usuário escolhe um arquivo, convertemos ele para Data URL
  // usando FileReader - assim conseguimos guardar a imagem em estado do React
  // sem precisar de um servidor para fazer upload de verdade.
  function handleImagemChange(e) {
    const arquivo = e.target.files[0];
    if (!arquivo) {
      setImagem(null);
      setPreview(null);
      return;
    }

    const leitor = new FileReader();
    leitor.onload = () => {
      setImagem(leitor.result); // string base64 tipo "data:image/jpeg;base64,..."
      setPreview(leitor.result);
    };
    leitor.readAsDataURL(arquivo);
  }

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
      imagem: imagem || null, // se não escolheu arquivo, fica null (usa placeholder)
    };

    onCadastrar(novoProduto);
    setNome('');
    setPreco('');
    setCategoria('');
    setImagem(null);
    setPreview(null);
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

      <div>
        <label className="text-sm text-gray-600 block mb-1">
          Imagem do produto (opcional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImagemChange}
          className="border border-gray-300 rounded p-2 text-sm w-full"
        />
      </div>

      {preview && (
        <img
          src={preview}
          alt="Pré-visualização"
          className="w-full h-32 object-cover rounded"
        />
      )}

      <button
        type="submit"
        className="bg-unyleya-coral hover:bg-unyleya-coralDark text-white rounded p-2 transition-colors"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default FormularioProduto;
