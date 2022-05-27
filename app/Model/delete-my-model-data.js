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
        return [response, null];
    }
    catch(err) {
        return [null, err];
    }
}
deleteMyModelData.propTypes = {
    url: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};

export default deleteMyModelData;
