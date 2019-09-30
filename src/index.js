import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import { Provider } from 'react-redux';
import store from './store';
import ImageService from './service/service';
import { ImageServiceProvider } from './component/image-service-context/image-service-context';


const imageService = new ImageService();

ReactDOM.render(
    <Provider store={store}>
        <ImageServiceProvider value={imageService}>
            <App />
        </ImageServiceProvider>
    </Provider>,
document.getElementById('root'));