import React from 'react'
import styles from "./mainContainer.module.scss"
type MainContainerProps = {
    children: React.ReactNode; // 👈️ type children
  };
export default function MainContainer(props: MainContainerProps) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}
