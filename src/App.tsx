import './App.css'
import { PhotoViewer } from '../src/components/PhotoViewer/PhotoViewer'
import { useState } from 'react'

function App() {
  const [imageId, setImageId] = useState(0);


  return (
    <>
      <div className="gallery-wrapper">
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"}/>
      </div>
    </>
  )
}

export default App
