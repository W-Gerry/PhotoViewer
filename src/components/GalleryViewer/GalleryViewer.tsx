import { useState } from "react";

import { imageUrls } from "../ImageSelector/GetImages";
import "./GalleryViewer.css"

interface GalleryViewerProps {
  setSelectedImageUrl: (imageUrl: string) => void;
}


export function GalleryViewer ({setSelectedImageUrl}:GalleryViewerProps) {

  const [style, setStyle] = useState("thumbnail")

  return (
    <>
      <div className="thumbnail-gallery-wrapper">
        <h1>All Images</h1>
        <h2>Click an image to show as the main photo</h2>
        <div className="thumbnail-gallery">
          {imageUrls.map((url) =>
            <img
              className={style}
              src={url}
              onClick={() => {
                setSelectedImageUrl(url);
                setStyle("thumbnail-selected");
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
