import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import map from './assets/map.jpeg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card sx={{width: '100vw',
    height: '100vh',
    display: 'flex'}}>
        <CardContent sx={{         width: '100%',
        height: '100%',       display: 'flex'}}>
        <div style={{ backgroundImage: `url(${map})`,         backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        width: '100%',
        height: '100%' }}>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      </div>
        </CardContent>
      </Card>
  )
}

export default App
