import { Component } from 'react';
import Notiflix from 'notiflix';
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
      <header class="searchbar">
        <form onSubmit={this.onSubmit} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            onChange={this.onInput}
            value={this.state.input}
            name="search"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
