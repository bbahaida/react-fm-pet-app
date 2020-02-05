import React from 'react';
export default class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    const photos = media.length
      ? media.map(({ large }) => large)
      : ['http/placecorgi.com/600/600'];
    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={index}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  }
}
