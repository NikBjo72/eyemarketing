import propTypes from "prop-types";
import { nanoid } from 'nanoid';

const postMyModelData = async (url, object) => {

    object.id = nanoid();
    var raw = JSON.stringify(object);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch(`${url}`, requestOptions);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return data = await response.json();
        } catch(error) {
            return console.log(error);
        }
}
postMyModelData.propTypes = {
    url: propTypes.string.isRequired,
    data: propTypes.object.isRequired
};

export default postMyModelData;
