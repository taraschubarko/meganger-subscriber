import React from 'react'
import BotSubscriber from "./components/BotSubscriber";

export const MesengerBot = ({
                              type = null,
                              label = 'Привязать',
                              className, host = '',
                              token = ''
                            }) => {
  switch (type) {
    case 'telegram':
      return <BotSubscriber label={label} className={className} host={host} token={token} provider={'telegram'}/>
      break;
    case 'whatsapp':
      return <BotSubscriber label={label} className={className} host={host} token={token} provider={'whatsapp'}/>
      break;
    default:
      return <button className={className}>{label}</button>
  }
}
