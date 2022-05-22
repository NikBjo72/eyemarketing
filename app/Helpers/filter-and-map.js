import propTypes from 'prop-types';

/**
* Set useState-hook to true/false 
* @param {array} array - name of the array.
* @param {string} filterKey - name of key you search for.
* @param {string} mapTarget - name of target to get(map).
*/
const FilterAndMap = (array, filterKey, mapTarget) => {
    return array
        .filter(i => i.id === filterKey)
        .map(t => t[mapTarget]);
}
export default FilterAndMap;
FilterAndMap.propTypes = {
    filterKey: propTypes.array.isRequired,
    filterKey: propTypes.string.isRequired,
    mapTarget: propTypes.string.isRequired
}