import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}  Developed By MasiHND.
      </p>
    </footer>
  );
}

export default Footer;
