import propTypes from 'prop-types';

/**
* Set useState-hook to true/false 
* @param {function} setStateFunction - set-function from state.
* @example
* const [update, setUpdate] = useState(false);
*/
const updateComponent = (state, setStateFunction) => {
    if (state == false) {
        setStateFunction(true);
    } else setStateFunction(false);
}
export default updateComponent;
updateComponent.propTypes = {
    setStateFunction: propTypes.func.isRequired
}