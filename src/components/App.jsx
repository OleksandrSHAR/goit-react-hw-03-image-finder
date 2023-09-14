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
      searchText: `${Date.now()}/${e.target.elements.search.value.toLowerCase()}`,
      image: [],
      page: 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    try {
      this.setState({ loading: true });
      const Img = await getImg(this.state.searchText, this.state.page);
      this.setState(prevState => ({
        image: [...prevState.image, ...Img.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
      console.log(3);
    }
  }
  render() {
    const { image, loading } = this.state;
    console.log(image);
    return (
      <div>
        <Searchbar SubmitValue={this.SubmitValue} />
        {image.length > 0 && <ImageGallery imagePac={image} />}

        <Button />
        {loading && <Loader />}
        <GlobalStyle />
      </div>
    );
  }
}
