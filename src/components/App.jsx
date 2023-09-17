import { LoadMore } from './LoadMore/LoadMore';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImg } from './Api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';

import { Loader } from './Loader/Loader';
import { Modal } from './Modal';
export class App extends Component {
  state = {
    image: [],
    page: 1,
    textSearch: '',
    maxPages: 0,
    error: false,
    loading: false,
    modal: false,
    modalUrl: '',
    modalAlt: '',
  };
  SubmitValue = e => {
    this.setState({
      textSearch: `${Date.now()}/${e.target.elements.search.value.toLowerCase()}`,
      image: [],
      page: 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.textSearch !== this.state.textSearch ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, error: false });
        const img = await getImg(this.state.textSearch, this.state.page);
        this.setState(prev => ({
          image: [...prev.image, ...img.hits],
          maxPages: Math.round(img.totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
      console.log(this.state.loading);
    }
  }
  onClickImg = e => {
    console.log(e);
    this.prevState({
      modal: true,
      modalUrl: e.largeImageURL,
      modalAlt: e.tags,
    });
  };
  onLoadeMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { image, loading, modal, modalUrl, modalAlt } = this.state;

    return (
      <div>
        <Searchbar SubmitValue={this.SubmitValue} />
        {image.length > 0 && (
          <ImageGallery imagePac={image} onClickImg={this.onClickImg} />
        )}
        {modal && <Modal imageURL={modalUrl} imegeALT={modalAlt} />}
        {image.length > 0 && <LoadMore onLoadeMore={this.onLoadeMore} />}
        <Loader loading={loading} />
        <GlobalStyle />
      </div>
    );
  }
}
