import Link from 'next/link'
import React from 'react'
import styles from "./posts_list.module.scss"

export default function Post({title, image, description, author, url}) {
    
  return (
    <article className={styles.news_post}>
        <h3 className={styles.post_title}><span>{title}</span></h3>
        <figure>
            <Link href={`/post${url}`}>
                <img src={image} alt={title} />
            </Link>
        </figure>
        <div className={styles.post_excerpt}>{description}</div>
        <div className={styles.post_bottom}>
            <div className={styles.author_name}><span>Author:</span> {author}</div>
            <div className={styles.read_more}>
                <Link href={`/post${url}`}>Read More</Link>
            </div>
        </div>
    </article>
  )
}
