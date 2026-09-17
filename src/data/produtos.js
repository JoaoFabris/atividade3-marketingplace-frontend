import tenisImg from '../assets/tenis.jpg';
import camisaImg from '../assets/camisa.jpeg';
import foneImg from '../assets/fone.jpg';
import mochilaImg from '../assets/mochila.jpg';
import relogioImg from '../assets/relogio.jpg';

const produtosIniciais = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    categoria: 'Calçados',
    preco: 199.9,
    promocao: true,
    imagem: tenisImg,
  },
  {
    id: 2,
    nome: 'Camiseta Básica',
    categoria: 'Roupas',
    preco: 49.9,
    promocao: false,
    imagem: camisaImg,
  },
  {
    id: 3,
    nome: 'Fone Bluetooth',
    categoria: 'Eletrônicos',
    preco: 129.9,
    precoOriginal: 159.9,
    promocao: true,
    imagem: foneImg,
  },
  {
    id: 4,
    nome: 'Mochila Casual',
    categoria: 'Acessórios',
    preco: 89.9,
    promocao: false,
    imagem: mochilaImg,
  },
  {
    id: 5,
    nome: 'Relógio Digital',
    categoria: 'Acessórios',
    preco: 159.9,
    promocao: false,
    imagem: relogioImg,
  },
];

export default produtosIniciais;