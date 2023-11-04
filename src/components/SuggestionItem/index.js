import './index.css'

const SuggestionItem = props => {
  const {eachList, respectiveSuggestion} = props
  const {id, suggestion} = eachList

  const onSearchInput = () => {
    respectiveSuggestion(id)
  }

  return (
    <li className="list-item">
      <p className="suggestion-item">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onSearchInput}
      />
    </li>
  )
}

export default SuggestionItem
