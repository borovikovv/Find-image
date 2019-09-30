import React from 'react';
import { ImageServiceConsumer } from './../image-service-context/image-service-context';

const withImageService = () => (Wrapped) => {
    return (props) => {
        return (
            <ImageServiceConsumer>
                {
                    (imageService) => {
                        return (
                            <Wrapped {...props}
                                    imageService={imageService} />
                        )
                    }
                }
            </ImageServiceConsumer>
        )
    }

}

export default withImageService;