if (!window.fetch) {
    alert("your browser does not support fetch API");

}
    async function apartmentsList() {
        try {
            const response=await fetch('apartments-list.json')
            return response.json();
        } catch (error) {

        }
    }
    export {apartmentsList}

    async function logementGetById(id) {
        try {
            const response = await fetch('apartments-list.json');
            const logs = await response.json();
            return logs.find((log) => log.id === id);
        } catch (error){
            console.error(error);
        }
    }
    export {logementGetById};
