import { Component } from 'react';
import Notiflix from 'notiflix';
import {
  SearcWrap,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Seaechbar.style';
export class Searchbar extends Component {
  state = { input: '' };
  onInput = ({ target }) => {
    this.setState({ input: target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value === '') {
      Notiflix.Notify.warning('Memento te hominem esse');
      return;
    }
    this.props.SubmitValue(e);
  };
  render() {
    return (
      <SearcWrap class="searchbar">
        <SearchForm onSubmit={this.onSubmit} class="form">
          <SearchFormButton type="submit" class="button">
            <span class="button-label">Search</span>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.onInput}
            value={this.state.input}
            name="search"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearcWrap>
    );
  }
}
