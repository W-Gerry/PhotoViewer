// import { useState } from "react";

import { imageUrls } from "../ImageSelector/GetImages";
import "./GalleryViewer.css"

interface GalleryViewerProps {
  setSelectedImageUrl: (imageUrl: string) => void;
}


export function GalleryViewer ({setSelectedImageUrl}:GalleryViewerProps) {

  //const [style, setStyle] = useState("thumbnail")

  // const updateStyle = (e : any) => {
  //   if(!e.target.classList.contains('-selected')) {
  //     e.target.classList.add('-selected') 
  //   }
  //   else {
  //     e.target.classList.remove('-selected') 
  //   }
  // }

  return (
    <>
      <div className="thumbnail-gallery-wrapper">
        <h1>All Images</h1>
        <h2>Click an image to show as the main photo</h2>
        <div className="thumbnail-gallery">
          {imageUrls.map((url, index) =>
            <img
              id={index.toString()}
              className="thumbnail"
              src={url}
              onClick={() => {
                setSelectedImageUrl(url);
                // updateStyle;
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
