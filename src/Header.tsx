import styles from "./Header.module.scss";

const Header = () => {
    return(
        <>
          <header>
            <h1 className={styles.headerH1}>Markdown Previewer</h1>
          </header>
        </>
    )
}

export default Header;