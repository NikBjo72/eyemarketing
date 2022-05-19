import getMyModelData from './get-my-model-data';

const GetIdByName = async (apiUrl, name) => {

    let database = await getMyModelData(apiUrl);

    try {
        const foundObject = database.find(o => o.name === name)
        return foundObject.id;
    } catch (error) {
        console.log(error);
    }
}
export default GetIdByName;