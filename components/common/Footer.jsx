const Footer = ({ authpage }) => {
  return (
    <footer
      className={`mt-12 text-sm text-zinc-500 max-w-7xl mx-auto py-4 w-full ${
        authpage && "text-center"
      }`}
    >
      <p>© 2024 Learn with Sumit • Terms • Privacy • Your Privacy Choices</p>
    </footer>
  );
};

export default Footer;
