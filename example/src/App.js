import React from 'react'

import { MesengerBot } from 'mesenger_subscriber'
import 'mesenger_subscriber/dist/index.css'

const App = () => {
  const host = 'https://localhost';
  //const host = 'https://nachai-api.progim.net';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODA4NVwvYXBpXC92MFwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDE5MTEyOTgsImV4cCI6MTY0MzEyMDg5OCwibmJmIjoxNjQxOTExMjk4LCJqdGkiOiJoZXV1VWhUTHZCWU5VSEFLIiwic3ViIjoiYjJjZDZkY2ItNzNjMS00MWYxLWIyNDQtN2M5MWFlOTFiY2NlIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.EiAqY8zjNdHfP3LnjhLweXEzcd1djqPjdjJhdBJ2328';
  //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmFjaGFpLWFwaS5wcm9naW0ubmV0XC9hcGlcL3YwXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0MTkwNDY3OSwiZXhwIjoxNjQzMTE0Mjc5LCJuYmYiOjE2NDE5MDQ2NzksImp0aSI6ImtiekpramNZT2IwTndNQ3giLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.TQJMMjTEx2GgkAKoN1x8m10sYyGHe8KVLVNObPVTOmQ';
  return <div>
    <p>Подписка на telegram</p>
    <MesengerBot type="telegram" className="btn" label={'Привязать'} host={host} token={token} />
    <p>Подписка на whatsapp</p>
    <MesengerBot type="whatsapp" className="btn" label={'Привязать'} host={host} token={token} />
  </div>
}

export default App
