import {useState} from "react";
import { imageUrls } from "../GetImages";
import "./GalleryViewer.css"

export function GalleryViewer () {
    const [imageId, setImageId] = useState(0)

    return (
        <>
            <h1>All Images</h1>
            <div className="thumbnail-gallery">
                {imageUrls.map((url) => {
                    return <img 
                        className="thumbnail"
                        src={url}
                        />
                })}
            </div>
            
        </>
    )
}