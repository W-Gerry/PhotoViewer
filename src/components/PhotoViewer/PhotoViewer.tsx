import './PhotoViewer.css';
import { GalleryViewer } from '../GalleryViewer/GalleryViewer';

// declare and export new function called 'PhotoViewer'
export function PhotoViewer() {    
    return (  
        <>              
            <div className="image-container">               
                <img className="image" src="https://picsum.photos/id/600/1600/900.jpg"/>
            </div>
            <div className="thumbnail-gallery-wrapper">
                <GalleryViewer />
            </div>
        </>
    );
}