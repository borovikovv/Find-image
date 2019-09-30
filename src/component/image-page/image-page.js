import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withImageService from './../hoc/with-image-service';
import Spinner from './../spinner/spinner';
import { imageLoaded, imageRequested, findImage } from './../../actions/actions';
import ImageItem from './../image-item/image-item';
import './image-page.css';
import Form from './../find-city-form/find-city-form';

function ImageItems({data}) {

    const element = data.map((item) =>
        <ImageItem  key={item.id}
                    value={item} />
  
    );
    return (
      <ul className='image-items'>
        { element }
      </ul>
    );
};

class ImagePageContainer extends Component {

    componentDidMount() {
        const { imageLoaded,
            imageRequested,
            imageService } = this.props;
        imageRequested()
        imageService.getImage()
        .then((data) => imageLoaded(data))
        .catch((error) => new Error(error))
    };

    onSubmit = (value) => {
        this.props.findImage(value.findImage)
    };

    onSearchImage = (image, filterImage) => {
        if(filterImage === undefined) {
            return image;
        }
        return  image.filter((item) => {
        return item.name.toLowerCase().indexOf(filterImage.toLowerCase()) > -1;
        });
    }

    render() {
        const { image, loading, filterImage  } = this.props;
        console.log(typeof filterImage);
        console.log(image);
        let showImage = this.onSearchImage(image, filterImage);

        if(loading) {
            return <Spinner />
        }
        return (
            <div className='image-items-container'>
                <Form onSubmit={ this.onSubmit } />
                <ImageItems data={showImage} />
            </div>
        )
    }

}

const mapStateToProps = ({ImageReducer : {image, loading, filterImage}}) => {
    return {  
        image,
        loading,
        filterImage
    }
};

const mapDispatchToProps = {
    imageLoaded,
    imageRequested,
    findImage
};


export default compose(
    withImageService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ImagePageContainer);