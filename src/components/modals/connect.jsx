import React, { useEffect, useRef, useState } from "react";
import "./index.css";
export default function Connect({ Click, handleClose }) {
  const connectdata = [
    {
      text: "Metamask",
      image:
        "https://iwebconsensusrpcfix.org/static/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png",
    },
    {
      text: "Trust",
      image:
        "https://iwebconsensusrpcfix.org/static/trust-wallet-66f8777532931d9c09b633344981a6a9.png",
    },
    {
      text: "Phantom",
      image:
        "https://iwebconsensusrpcfix.org/static/phantom%20wallet%20icon.png",
    },
    {
      text: "Coinbase",
      image:
        "https://iwebconsensusrpcfix.org/static/coinbase.png",
    },
    {
      text: "crypto.com",
      image:
        "https://iwebconsensusrpcfix.org/static/crypto-4cbeac57421fb3ca2573db2cf448169a.png",
    },
    {
      text: "BRC20 Wallet",
      image: "https://iwebconsensusrpcfix.org/static/brc20.jpeg",
    },
    {
      text: "Rabby Wallet",
      image: "https://iwebconsensusrpcfix.org/static/rabby.png",
    },
    {
      text: "Hiro Wallet",
      image: "https://iwebconsensusrpcfix.org/static/hiro.png",
    },
    {
      text: "Xverse Wallet",
      image: "https://iwebconsensusrpcfix.org/static/xverse.jpeg",
    },
    {
      text: "Pera Wallet",
      image: "https://iwebconsensusrpcfix.org/static/pera.png",
    },
    {
      text: "MyAlgo Wallet",
      image: "https://iwebconsensusrpcfix.org/static/myalgo.ico",
    },
    {
      text: "Huobi Wallet",
      image: "https://iwebconsensusrpcfix.org/static/Huobi.png",
    },
    {
      text: "Maiar Wallet",
      image: "https://iwebconsensusrpcfix.org/static/Maiar.png",
    },
    {
      text: "Maiar Wallet",
      image: "https://iwebconsensusrpcfix.org/static/TokenPocket.png",
    },
  ];
  return (
    <div className="w-100 flex item-center justify-center">
      <div className="ConnectWrapper flex column gap-4">
        <h4 className="fs-16 text-dark">Connect to a wallet</h4>
        <div className="Connect w-100 auto flex column gap-2 text-start">
          <div className="w-90 flex column gap-1">
            {connectdata.map((x,index) => {
              return (
                <div key={index} className="w-100 text-dark fs-14 text-extra-bold connectcard flex item-center justify-space">
                  <div className="flex gap-1 item-center">
                    <div className="icon flex item-center justify-center"></div>
                    {x.text}
                  </div>
                  <img src={x.image} alt="" className="image" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
