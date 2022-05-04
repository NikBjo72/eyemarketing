import { url } from '../Helpers/images';
import './canvas-image.css'

const CanvasImage = (ctx, imageName, width) => {

    let image = new Image();

    const getImageHeight = (inImageName, inWidth) => {
        image.src = url[inImageName];
        const imageWidth = image.naturalWidth;
        const imageHeight = image.naturalHeight;
        const scale = imageHeight/imageWidth;

        console.log(inWidth * scale);

        return (inWidth * scale);
    }
    let imageHeight = getImageHeight(imageName, width);

    image.onload = () => {
        ctx.drawImage(image, 50, 50, width, imageHeight)
    }
    console.log(`Test ${getImageHeight(imageName, width)}`);
}

export default CanvasImage