import { url } from '../Helpers/images';
import './canvas-image.css'

export class CanvasImage {

    constructor(ctx, object) {
        this.image = new Image();
        this.image.src = url[object.imageName];
        this.ctx = ctx;
        this.imageName = object.imageName;
        this.imageX = object.imageX;
        this.imageY = object.imageY;
        this.imageWidth = object.imageWidth;
        console.log('1');
        this.imageHeight = object.imageHeight;
        //this.imageHeight = this.getImageHeight(this.imageName, this.imageWidth);
        console.log('2');
    }
    
    getImageHeight = (inImageName, inWidth) => {
        this.image.src = url[inImageName];
        const imageWidth = this.image.naturalWidth;
        const imageHeight = this.image.naturalHeight;
        const scale = imageHeight/imageWidth;

        console.log('3');
        console.log(inWidth * scale);
        return (inWidth * scale);
    }

    load = () => {
            this.ctx.drawImage(this.image, this.imageX, this.imageY, this.imageWidth, this.imageHeight)
    }
}