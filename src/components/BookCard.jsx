import styles from "./Bookcard.module.css"
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

function BookCard({data , handlelikedList}) {


    const {image , title , language , pages , author} = data


    const [like , setLike] = useState(false)

    const likeHandler = () => {
        setLike(like => !like)
        handlelikedList(data , like)
    }
    

    
    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages} page</span>
                </div>
            </div>
            <button onClick={likeHandler}>
                <BsFillHeartFill fontSize="1.9rem" color={like ? "red" : "white"}/>
            </button>
        </div>
    )
}

export default BookCard
