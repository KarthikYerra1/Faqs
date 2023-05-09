import './index.css'

/* const FaqItem = props => {
  const {details} = props
  const {questionText, id} = details

  return (
    <li className="question-container">
      <p className="question">{questionText}</p>
      <button className="btn" type="button">
        <img src="" alt="plusIcon" />
      </button>
    </li>
  )
} */

import {Component} from 'react'

class FaqItem extends Component {
  state = {
    iconClicked: false,
  }

  onClickIcon = () => {
    this.setState(prevState => ({
      iconClicked: !prevState.iconClicked,
    }))
  }

  render() {
    const {iconClicked} = this.state
    const {details} = this.props
    const {questionText, answerText} = details
    const imgUrl = iconClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAltText = iconClicked ? 'minus' : 'plus'
    const renderAnswerText = iconClicked ? (
      <div>
        <hr className="line" />
        <p className="answer">{answerText}</p>
      </div>
    ) : null
    return (
      <li className="question-container-element">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="btn" type="button" onClick={this.onClickIcon}>
            <img src={imgUrl} alt={imgAltText} />
          </button>
        </div>
        {renderAnswerText}
      </li>
    )
  }
}

export default FaqItem
