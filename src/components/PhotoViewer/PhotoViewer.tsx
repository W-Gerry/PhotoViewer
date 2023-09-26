import './PhotoViewer.css';

interface PhotoViewerProps {
    selectedImageUrl: string; 
}

export function PhotoViewer( {selectedImageUrl}:PhotoViewerProps ) {    
    return (  
        <>                           
            <img className="image" src={selectedImageUrl}/>
        </>
    );
}