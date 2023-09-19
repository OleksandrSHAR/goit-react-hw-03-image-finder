import { Component } from 'react';
import { toast } from 'react-hot-toast';
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
      toast.error('The search field cannot be empty');
      return;
    }
    this.props.SubmitValue(e);
  };
  render() {
    return (
      <SearcWrap>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.onInput}
            value={this.state.input}
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearcWrap>
    );
  }
}
