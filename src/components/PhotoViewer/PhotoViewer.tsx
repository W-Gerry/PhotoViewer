import './PhotoViewer.css';

interface PhotoViewerProps {
    selectedImageUrl: string; 
}

// declare and export new function called 'PhotoViewer'
export function PhotoViewer( {selectedImageUrl}:PhotoViewerProps ) {    
    return (  
        <>                           
            <img className="image" src={selectedImageUrl}/>
        </>
    );
}