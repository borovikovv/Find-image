const ImageReducer = (state, action) => {
    if(state === undefined) {
        return {
            image: [],
            loading: true,
            filterImage: ''
        };
    }
    switch(action.type){
        case 'FETCH_IMAGE_LOADED':
            return{
                loading: false,
                image: action.payload,
                filterImage: ''
            };
        case 'FETCH_IMAGE_REQUESTED':
            return {
                loading: true,
                image: [],
                filterImage: ''
            };
        case 'FILTER_IMAGE':
                return {
                    filterImage: action.payload,
                    loading: false,
                    image: [...state.image]
                };
        default: 
            return state;   
    }
};

export default ImageReducer;