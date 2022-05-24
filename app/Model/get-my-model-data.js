import propTypes from "prop-types";

const getMyModelData = async (url) => {

    try {
        const response = await fetch(`${url}`);
        // if(!response.ok){
        //     throw new Error(response.statusText);
        // }
            data = await response.json();
            return  [data, null]
        } catch(err) {
            //return console.log(err);
            return  [null, err]
        }
}
getMyModelData.propTypes = {
    url: propTypes.string.isRequired
};

export default getMyModelData
