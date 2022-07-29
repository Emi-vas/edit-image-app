import React from 'react';
import domtoimage from 'dom-to-image';

const previsu = ({ imageSrc, setImageSrc, setSize, size }) => {

    const importFile = () => {
       document.getElementById('inputFile').click()
    }

    const downloadImage = () => {
        let node = document.getElementById('big-image');
        let zoomValue = node.style.zoom
        node.style.zoom = "100%"
        
        domtoimage.toPng(node)
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'edit-image.png';
            link.href = dataUrl;
            link.click();

            node.style.zoom = zoomValue
        });
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        if(file) {
            const urlFile = URL.createObjectURL(file)
            setImageSrc(urlFile)

            //to check size (width and height)
            const reader = new FileReader()
            reader.onload = function () {
                var img = new Image();      
                img.src = urlFile;

                img.onload = function () {
                    var w = this.width;
                    var h = this.height;
                    
                   // w > h ? setPaysageMode(true) : setPaysageMode(false)
                    setSize({...size, width: w, height: h})
                }
                    
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='main__previsu'>
            <div>
                {
                    imageSrc ? (
                        <img src={imageSrc} alt="preview image" id='image-previsu'/>
                    ) : <i className="fa-solid fa-file-image"></i>
                }
            </div>
            
            <div>
                <input type="file" hidden id='inputFile' onChange={(e) => handleFile(e)} />
                <button className='active' onClick={importFile}>Importer une photo</button>
                {
                    imageSrc && <button onClick={downloadImage}>Télécharger</button>
                }
            </div>
        </div>
    );
};

export default previsu;