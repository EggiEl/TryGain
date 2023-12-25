
"use client"
import Image from 'next/image'
import styles from './page.module.css'
import IkegaiButton from './Components/buttonIkegai'


export default function Home() {

  function handleClick(name_ikegai : string ) {
    console.log(name_ikegai)
  }


  return (
    <IkegaiButton name ="Erster Button" lifting_up={handleClick} /> 
  )
}
