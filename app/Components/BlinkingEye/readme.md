# How to use Blinking Eye

### Blinking Eye is a reusable component for React that make it easy for you to make a button that changing betwen two pictures when it is clicked. There is for now three different areas of application (types), global, local and local-scope. Also two different sizes, small and medium. In default mode the picture is a blinking eye, but you can easy change pictures.    
***

### Type
>`global`   
To use this type you have to install React Router. Button is changing picture depending on active path.   
`local`   
For this type the button remains active until you click and deactivate it.   
`local-scope`   
For this type you can use several buttons in the same component. You can then toggle between activated and deactivated on the same button. However, when you click a new button all the others becomes deactivated.

### onClick
>You can choose if you would the button to use a function e.g. onClick={handleClick} by props: handleEvent = {true/false}. The button in that case returns two parameters: name and status.

### id
>The two sizes:   
id="smallBtn" or id="mediumBtn"

### Images
>If you whant to change images, you can do that with props:   
imageActivated={ImageName}
imageDeactivated={ImageName}
### Starting status
>By props setStatus={true/false} you choose if you would the button to be activated or deactivated as default.
### Other props
>name="" -> name of the button
text="" -> the text that is displayed beside the image.

### Dependencies
* react-router-dom
* prop-types