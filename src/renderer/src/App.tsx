import { useState } from 'react'

function App(): JSX.Element {
  const [bfrName, setBfrName] = useState('')

  const ipcHandle = (): void => {
    window.electron.ipcRenderer.send('ping', bfrName)
  }

  return (
    <>
      <p className="tip">Entrer le nom du fichier</p>
      <div className="actions">
        <div className="action">
          <input value={bfrName} onChange={(e) => setBfrName(e.target.value)} />
        </div>
        <div className="action">
          <a href="#" onClick={ipcHandle}>
            Conversion
          </a>
        </div>
      </div>
    </>
  )
}

export default App
