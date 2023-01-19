import React from 'react'
import {uid} from 'react-uid';
import Post from './Post';
import styles from "./posts_list.module.scss"

export default function PostsList({news} : {news: object}) {
    function renderPosts () {
        return news.articles.results.map( post => {
            console.log(post)
            const url = (new URL(post.url)).pathname;
            let author = ""
            if(post.authors.lenght > 0){
                author += post.authors[0].name
            }else{
                author += "No Data"
            }
            console.log(author)
          return (
            <Post 
                key={uid(post)} 
                title={post.title} 
                image={post.image} 
                description={post.description} 
                author={author} 
                url={url}
            />
          )
        })
      }
  return (
    <div className={`${styles.post_list} ${styles.general_list}`}>
        {renderPosts()}
    </div>
  )
}
