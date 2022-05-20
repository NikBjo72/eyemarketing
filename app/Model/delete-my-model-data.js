import propTypes from "prop-types";
import GetIdByName from './get-id-by-name';

const deleteMyModelData = async (url, name) => {

    const id = await GetIdByName(url, name)

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    try {
        const response = await fetch(`${url}/${id}`, requestOptions);
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.status;
    }
    catch(error) {
        console.log('i error: ', error);
        return error;
    }
}
deleteMyModelData.propTypes = {
    url: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};

export default deleteMyModelData;
