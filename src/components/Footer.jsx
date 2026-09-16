// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center p-4 mt-10 text-sm">
      <p>
        © {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
