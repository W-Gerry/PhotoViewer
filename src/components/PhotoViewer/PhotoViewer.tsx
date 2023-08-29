import './PhotoViewer.css';


// declare and export new function called 'PhotoViewer'
export function PhotoViewer( {selectedImageUrl} ) {    
    return (  
        <>                           
            <img className="image" src={selectedImageUrl}/>
        </>
    );
}