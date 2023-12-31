import styles from "./Layout.module.css"



function Layout({children}) {
    return (
        <>
            <header className={styles.header}>
                <h2>Book App</h2>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Designed By Me</p>
            </footer>
        </>
    )
}

export default Layout
