import { LoadMore } from './LoadMore/LoadMore';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImg } from './Api/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { toast } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
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
    console.log(e.target.elements.search.value);
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
        if (prevState.page === this.state.page) {
          toast.success(`You have ${img.totalHits} images`);
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onClickImg = e => {
    const imgMod = this.state.image.filter(
      img => img.webformatURL === e.target.src
    );

    this.setState({
      modal: true,
      modalUrl: imgMod[0].largeImageURL,
      modalAlt: imgMod[0].tags,
    });
  };
  onCloseModal = e => {
    if (e.target === e.currentTarget || e.code === `Escape`) {
      this.setState({ modal: false });
    }
  };
  onLoadeMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { image, loading, modal, modalUrl, modalAlt, page, maxPages } =
      this.state;

    return (
      <div>
        <Searchbar SubmitValue={this.SubmitValue} />
        {image.length > 0 && (
          <ImageGallery imagePac={image} onClickImg={this.onClickImg} />
        )}
        {modal && (
          <Modal
            modalUrl={modalUrl}
            modalAlt={modalAlt}
            onCloseModal={this.onCloseModal}
          />
        )}
        {image.length > 0 && page !== maxPages && (
          <LoadMore onLoadeMore={this.onLoadeMore} />
        )}
        <Loader loading={loading} />
        <GlobalStyle />
      </div>
    );
  }
}
