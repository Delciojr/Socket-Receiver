import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect, useRef } from "react";
import SocketIOClient from "socket.io-client";
import * as io from "socket.io-client";
import { useRouter } from 'next/router';
let ioClass: any;
export default function App({ Component, pageProps }: AppProps) {
  const [connected, setConnected] = useState<boolean>(false);
  const router = useRouter()
  useEffect((): any => {
    // connect to socket server
    const socket = io.connect('http://192.168.15.87:3000', {
      path: "/api/socketio",
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
    
    });
  ioClass = socket
  // log socket connection
  socket.on("connect", () => {
    console.log("SOCKET CONNECTED!", socket.id);
    setConnected(true);
  });
  // update chat on new message dispatched
  // socket.on("message", (message: any) => {

  // });
  // socket disconnet onUnmount if exists
  if (socket) return () => socket.disconnect();

}, []);

return (<>
  <Component {...pageProps} io={() => ioClass} />
</>)
}
