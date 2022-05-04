import { url } from '../Helpers/images';
import './canvas-image.css'

export class CanvasImage {

    // constructor(ctx, object) {
    //     this.image = new Image();
    //     this.ctx = ctx;
    //     this.imageName = object.imageName;
    //     this.imageX = object.imageX;
    //     this.imageY = object.imageY;
    //     this.imageWidth = object.width;
    //     this.imageHeight = getImageHeight(this.imageName, this.imageWidth);
    // }

    constructor(ctx) {
        this.image = new Image();
        this.ctx = ctx;
        this.imageName = 'bild1';
        this.imageX = 100;
        this.imageY = 50;
        this.imageWidth = 200;
        this.imageHeight = this.getImageHeight(this.imageName, this.imageWidth);
    }
    
    getImageHeight = (inImageName, inWidth) => {
        this.image.src = url[inImageName];
        const imageWidth = this.image.naturalWidth;
        const imageHeight = this.image.naturalHeight;
        const scale = imageHeight/imageWidth;

        return (inWidth * scale);
    }

    load = () => {
            this.ctx.drawImage(this.image, this.imageX, this.imageY, this.imageWidth, this.imageHeight)
    }
}