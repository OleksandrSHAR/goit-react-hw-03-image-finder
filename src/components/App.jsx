import { Button } from './Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery';
import { getImg } from './api';
import { Searchbar } from './Searchbar';
import { Component } from 'react';

import { Loader } from './Loader';
export class App extends Component {
  state = {
    image: [],
    page: 1,
    textSearch: '',
    maxPages: 0,
    loading: false,
  };
  SubmitValue = e => {
    this.setState({
      textSearch: `${Date.now()}/${e.target.elements.search.value.toLowerCase()}`,
      image: [],
      page: 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.textSearch !== this.state.textSearch) {
      try {
        this.setState({ loading: true });
        const img = await getImg(this.state.textSearch, this.state.page);
        this.setState(prevState => ({
          image: [...prevState.image, ...img.hits],
          maxPages: Math.round(img.totalHits / 12),
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
        console.log(3);
      }
    }
  }
  render() {
    const { image, loading } = this.state;
    console.log(image);
    return (
      <div>
        <Searchbar SubmitValue={this.SubmitValue} />
        {image.length > 0 && <ImageGallery imagePac={image} />}

        {image.length > 0 && <Button />}
        {loading && <Loader />}
        <GlobalStyle />
      </div>
    );
  }
}
