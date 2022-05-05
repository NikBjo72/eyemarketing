import { url } from '../Helpers/images';
import './canvas-image.css'

export class CanvasImage {

    constructor(object) {
        this.type = "img";
        this.order = 0;
        this.image = new Image();
        this.image.src = url[object.imageName];
        this.imageName = object.imageName;
        this.imageX = object.imageX;
        this.imageY = object.imageY;
        this.imageWidth = object.imageWidth;
        this.imageHeight = object.imageHeight;
    }
    
    getImageHeight = () => {
        const scale = this.image.naturalHeight/this.image.naturalWidth;
        return (this.imageWidth * scale);
    }
}