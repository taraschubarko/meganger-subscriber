import React, {useEffect, useState} from 'react';

import MesengerBot from 'mesenger_subscriber'
import 'mesenger_subscriber/dist/index.css'
import axios from "axios";

const App = () => {
  const host = 'https://localhost';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0XC9hcGlcL3YwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MjE2MTU1MiwiZXhwIjoxNjQzMzcxMTUyLCJuYmYiOjE2NDIxNjE1NTIsImp0aSI6IlNweFBvOHVGU29rdHc0RXQiLCJzdWIiOiIwMWI2MDU1MS1hZTY0LTRmMTItOWI5MC1iOTM5ZTU3OWRhZWMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.mzZ7wHtTctylJ8rBI0M6--j7pzO-YBWL5Mn-aiv9DVo';

  const [item, setItem] = useState({});
  const [telegramText, setTelegramText] = useState('Привязать');
  const [whatsappText, setWhatsappText] = useState('Привязать');
  const [telegramAction, setTelegramAction] = useState('subscribe');
  const [whatsappAction, setWhatsappAction] = useState('subscribe');

  const subs = (result) => {
    setItem(result.data);
  };

  const mySubscr = () => {
    axios.get(`${host}/api/v0/settings/subscribe`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setItem(response.data.data);
    });
  };

  const setText = () => {
    if (Object.keys(item).length) {
      item.providers.map(val => {
        switch (val.provider) {
          case 'whatsapp':
            if(val.is_subscribe){
              setWhatsappText('Отвязать');
              setWhatsappAction('unsubscribe');
            }
            break;
          case 'telegram':
            if(val.is_subscribe){
              setTelegramText('Отвязать');
              setTelegramAction('unsubscribe');
            }
            break;
        }
      })
    }
  }

  useEffect(() => mySubscr(), []);
  useEffect(() => {
    setText()
  });

  return <div>
    <p>Подписка на telegram</p>
    <MesengerBot
      provider="telegram"
      className="btn"
      label={telegramText}
      host={host}
      token={token}
      onSubscribe={subs}
      onUnSubscribe={subs}
      item={item}
      action={telegramAction}
    />
    <p>Подписка на whatsapp</p>
    <MesengerBot
      provider="whatsapp"
      className="btn"
      label={whatsappText}
      host={host}
      token={token}
      onSubscribe={subs}
      onUnSubscribe={subs}
      item={item}
      action={whatsappAction}
    />
  </div>
}

export default App
