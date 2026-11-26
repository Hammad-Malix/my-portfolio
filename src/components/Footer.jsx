export default function Footer({ theme }) {
  return (
    <footer className="footer">
      <img
        className="footer__image"
        src={`${import.meta.env.BASE_URL}images/footer-banner-${theme}.jpg`}
        alt=""
      />
    </footer>
  );
}