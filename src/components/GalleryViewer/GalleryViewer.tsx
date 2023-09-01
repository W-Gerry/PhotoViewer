// Random test for git changes

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
                {/* <p>Selected image = {imageUrl}</p> */}
                <div className="thumbnail-gallery">
                    {imageUrls.map((url) => {
                        return <>
                            <img 
                                className="thumbnail"
                                src={url}
                                onClick={() => setSelectedImageUrl(url)}
                            />
                        </>
                    })}
                </div>
            </div>
        </>
    )
}
