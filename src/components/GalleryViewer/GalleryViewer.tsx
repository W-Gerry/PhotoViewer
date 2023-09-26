import { imageUrls } from "../ImageSelector/GetImages";
import "./GalleryViewer.css"

interface GalleryViewerProps {
  setSelectedImageUrl: (imageUrl: string) => void;
}


export function GalleryViewer ({setSelectedImageUrl}:GalleryViewerProps) {
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
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
