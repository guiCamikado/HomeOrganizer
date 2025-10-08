class Request {
    constructor(parameters) {
        // Get and Post request classes
        function getRequest(url) {
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json());
        }

        function postRequest(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json());
        }

    }
}
export default Request;