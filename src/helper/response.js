/**
 * Helper Function for building Rest Responses as JSON Object
 * @param successful
 * @param res
 * @returns Object with Response; Error if successful is false - Data if successful is true
 */
const buildResponse = (successful, res) => {
    return {
        successful,
        [successful ? 'data': 'error']: res
    };
};

export {buildResponse}