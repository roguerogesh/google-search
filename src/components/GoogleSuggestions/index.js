import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  moveToSearchInput = id => {
    const {searchInput} = this.state
    const {suggestionsList} = this.props // access the props inside the methods or render methods

    const filteredSuggestion = suggestionsList.filter(each => each.id === id)

    this.setState((searchInput: filteredSuggestion.suggestion))
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props // access the props inside the methods or render methods
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-bar"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResult.map(each => (
              <SuggestionItem
                eachList={each}
                key={each.id}
                respectiveSuggestion={this.moveToSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
