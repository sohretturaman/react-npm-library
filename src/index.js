import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

//write your comps in this file and test them  in app.js file under the example folder
export const PrimaryButton = ({ text }) => {
  return (
    <div>
      <button className={styles.primary}>{text}</button>
    </div>
  )
}

export const DefalultButton = ({ text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.default}>{text}</button>
    </div>
  )
}

export const DashedButton = ({ text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.dashed}>{text}</button>
    </div>
  )
}

export const TextButton = ({ text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.text}>{text}</button>
    </div>
  )
}

export const LinkButton = ({ text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.link}> {text}</button>
    </div>
  )
}
