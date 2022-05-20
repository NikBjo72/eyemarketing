import { url } from '../Helpers/images';

export class CanvasImage {

    constructor(object) {
        this.type = "img";
        this.order = 0;
        this.image = new Image();
        this.image.src = url[object.id];
        this.imageName = object.id;
        this.X = object.X;
        this.Y = object.Y;
        this.imageWidth = object.imageWidth;
        this.imageHeight = object.imageHeight;
    }
    
    getImageHeight = async () => {
        if (!this.image.complete) {
            await new Promise(resolve => this.image.onload = () => resolve());
        }
        const scale = this.image.naturalHeight/this.image.naturalWidth;
        return (this.imageWidth * scale);    
    }
}