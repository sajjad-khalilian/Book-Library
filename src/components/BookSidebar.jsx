import styles from "./BookSidebar.module.css"


function BookSidebar({data: {image , title}}) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default BookSidebar
