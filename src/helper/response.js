const buildResponse = (successful, res) => {
    return {
        successful,
        [successful ? 'data': 'error']: res
    };
};

export {buildResponse}