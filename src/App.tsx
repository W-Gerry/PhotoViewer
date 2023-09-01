import './App.css'
import { PhotoViewer } from '../src/components/PhotoViewer/PhotoViewer'
import { GalleryViewer } from './components/GalleryViewer/GalleryViewer'
import { useState } from 'react'


function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <>
      <div className="gallery-wrapper">
            <h1>Image Gallery Using React</h1>
            <PhotoViewer selectedImageUrl={selectedImageUrl}/>
            <GalleryViewer setSelectedImageUrl={setSelectedImageUrl}/>
      </div>
    </>
  )
}

export default App
