# mesenger_subscriber

> subscribe to whatsapp telegtam bot

[![NPM](https://img.shields.io/npm/v/mesenger_subscriber.svg)](https://www.npmjs.com/package/mesenger_subscriber) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mesenger_subscriber
or
yarn add mesenger_subscriber
```

## Usage

```jsx
import React, {useEffect, useState} from 'react';

import MesengerBot from 'mesenger_subscriber'
import 'mesenger_subscriber/dist/index.css'
import axios from "axios";

const App = () => {
  const host = 'https://localhost';
  const token = '';

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
      if (item.subscribers.telegram.is_subscribed) {
        setTelegramText('Отвязать');
        setTelegramAction('unsubscribe');
      }
      if (item.subscribers.whatsapp.is_subscribed) {
        setWhatsappText('Отвязать');
        setWhatsappAction('unsubscribe');
      }
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

```

## License

MIT © [taraschubarko](https://github.com/taraschubarko)
