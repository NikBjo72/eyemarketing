import propTypes from 'prop-types';

/**
* Set useState-hook to true/false 
* @param {function} setStateFunction - set-function from state.
* @example
* const [update, setUpdate] = useState(false);
*/
const UpdateComponent = (state, setStateFunction) => {
    if (state == false) {
        setStateFunction(true);
    } else setStateFunction(false);
}
export default UpdateComponent;
UpdateComponent.propTypes = {
    setStateFunction: propTypes.func.isRequired
}