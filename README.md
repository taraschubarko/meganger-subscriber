# mesenger_subscriber

> subscribe to whatsapp telegtam bot

[![NPM](https://img.shields.io/npm/v/mesenger_subscriber.svg)](https://www.npmjs.com/package/mesenger_subscriber) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mesenger_subscriber
```

## Usage

```jsx
import React, { Component } from 'react'

import { MesengerBot } from 'mesenger_subscriber'
import 'mesenger_subscriber/dist/index.css'

const App = () => {
  const host = 'https://localhost';
  const token = '';

  return <div>
    <p>Подписка на telegram</p>
    <MesengerBot type="telegram" className="btn" label={'Привязать'} host={host} token={token} />
    <p>Подписка на whatsapp</p>
    <MesengerBot type="whatsapp" className="btn" label={'Привязать'} host={host} token={token} />
  </div>
}

export default App
```

## License

MIT © [taraschubarko](https://github.com/taraschubarko)
