const host =  "http://localhost:3030";


async function request(url, options) {

    try {
        const response = await fetch(host + url, options);

        if(!response){
            const err = await response.json();
            throw new Error(err.message);
        }

        try {
            const data = response.json();
            return data;
        } catch (error) {
            alert(error.message);
            return error;
        };

    } catch (error) {
        alert(error.message);
        return error;
    }
}