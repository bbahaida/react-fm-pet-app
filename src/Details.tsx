import pet, { Photo } from '@frontendmasters/pet';
import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import ThemeContext from './ThemeContext';

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  public state = {
    loading: true,
    showModal: false,
    animal: '',
    breed: '',
    description: '',
    location: '',
    name: '',
    url: '',
    media: [] as Photo[]
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);

  public componentDidMount() {
    if (!this.props.id) {
      navigate('/');
      return;
    }
    // throw new Error('Lol');
    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        media: animal.photos,
        description: animal.description,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  public render() {
    if (this.state.loading) {
      return <h1>loading ... </h1>;
    }
    const {
      animal,
      breed,
      description,
      location,
      name,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
export default function DetailsWithErrorBoundary(
  props: RouteComponentProps<{ id: string }>
) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
