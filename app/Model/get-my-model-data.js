

const getMyModelData = async (url) => {

    try {
        const response = await fetch(`${url}`);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return data = await response.json();
        } catch(error) {
            return console.log(error);
        }
}

export default getMyModelData
