import "../footer/footer.css";

function Footer() {
  return (
    <section className="footer">
      <section className="footer__content">
        <p className="footer__name">© 2026 Lisa</p>
        <p className="footer__role">webbutvecklare | grafiskdesigner</p>
        <section className="footer__links">
          <a href="https://github.com/Ler98" target="_Blank">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lisa-eriksson-580b601ba/"
            target="_Blank"
          >
            Linkedin
          </a>
          <a href="mailto:lisa.eriksson98@hotmail.com">Email</a>
        </section>
      </section>
    </section>
  );
}

export default Footer;
