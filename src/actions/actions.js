const imageLoaded = (image) => {
    return {
        type: 'FETCH_IMAGE_LOADED',
        payload: image
    };
};

const imageRequested = () => {
    return {
        type: 'FETCH_IMAGE_REQUESTED'
    };
};

const findImage = (filterImage) => {
    return {
        type: 'FILTER_IMAGE',
        payload: filterImage
    };
};

export {
    imageLoaded,
    imageRequested,
    findImage
};