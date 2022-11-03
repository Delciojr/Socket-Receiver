import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios"
import { Button, Col, Panel } from 'rsuite'

export default function Home() {

  const callSocket = (name: string)=>{
    axios.post("/api/emitSocket", {message: name}).then((res:any)=>{
      console.log(res)
    })
  }
  return (
   <>
    <Panel style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', height: '100vh', width: '100%'}}>
      <div style={{textAlign: 'center'}}>
        <h1>DINDOM Nec Brasil</h1>
      </div>
      <div style={{marginTop: '10vhw', display: 'flex', flexDirection: 'row',height:"15vh", justifyContent: 'space-between'}}>
        <Button appearance='primary' color='violet' onClick={()=> callSocket('encomenda')}>Chegou encomendas</Button>
        <Button appearance='primary' color='orange' onClick={()=> callSocket('food')}>Chegou marmitex</Button>
      </div>
    </Panel>
       
   </>
  )
}
