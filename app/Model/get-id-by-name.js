import getMyModelData from './get-my-model-data';

const GetIdByName = async (apiUrl, name) => {

    const [data, err] = await getMyModelData(apiUrl);

    try {
        const foundObject = data.find(o => o.name === name)
        return foundObject.id;
    } catch (error) {
        console.log(error);
    }
}
export default GetIdByName;