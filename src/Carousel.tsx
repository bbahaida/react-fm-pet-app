import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  media: Photo[];
}
interface IState {
  photos: string[];
  active: number;
}

export default class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }: IProps) {
    const photos = media.length
      ? media.map(({ large }) => large)
      : ['http/placecorgi.com/600/600'];
    return { photos };
  }

  handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
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
