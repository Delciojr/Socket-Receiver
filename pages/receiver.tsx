import { useState } from 'react';
import { Button, Col, Panel, Notification } from 'rsuite'

const delay = (ms: any) => new Promise(res => setTimeout(res, ms))

const receiver = (props: any) => {
    const [alerta, setAlerta] = useState<any>(false);
    const [msg, setMsg] = useState<any>('');
    const [urltext, setUrlText] = useState<any>('');

    props?.io()?.on("message", async (message: any) => {
        console.log({message})
        setMsg(message.message);
        setUrlText(message?.url);
        setAlerta(true)
       
        await delay(5000)
        setAlerta(false)

    });
    
    return (<>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: "100%",height: "100%"}}>
            {alerta && (<>
                <img src="https://media1.giphy.com/media/B0uJ6d5OXb50k/giphy.gif"></img>
                {/* <audio hidden
                    id="backgroundMusic"
                    autoPlay
                    controls
                    loop
                    preload="/sounds/ele-g0sta.mp3"
                    src={msg == "food" ? "https://www.myinstants.com/media/sounds/acabou.mp3" : "https://www.myinstants.com/media/sounds/bora-bill.mp3" }>
                </audio> */}
                    <audio hidden
                    id="backgroundMusic"
                    autoPlay
                    controls
                    loop
                    preload="/sounds/ele-g0sta.mp3"
                    src={urltext}>
                </audio>
             
            </>)}

        </div>
    </>)
}
export default receiver