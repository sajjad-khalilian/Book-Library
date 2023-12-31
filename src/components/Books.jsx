import { useState } from "react";
import {books} from "../constans/BookData"
import BookCard from "./BookCard"
import BookSidebar from "./BookSidebar";
import styles from "./Books.module.css"


function Books() {
    const [liked , setLiked] = useState([])

    const handlelikedList = (book , status) => {
        if(status){
            const newbookList = liked.filter(i => i.id !== book.id)
            setLiked(newbookList)
        }else{
            setLiked(liked => [...liked , book])
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {books.map(book => (<BookCard key={book.id} data={book} handlelikedList={handlelikedList}/>))}
            </div>
            {!!liked.length && (
                <div className={styles.favorite}>
                    <h4>Favorites</h4>
                    {liked.map(book => <BookSidebar key={book.id} data={book}/>)}
                </div>
            )}
        </div>
    )
}

export default Books
