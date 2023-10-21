import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'

import './App.css'

class App extends Component {
  state = {
    bold: false,
    italic: false,
    underLine: false,
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderLineButton = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  render() {
    const {bold, italic, underLine} = this.state
    const boldText = bold ? 'bold' : ''
    const italicText = italic ? 'italic' : ''
    const underlineText = underLine ? 'underline' : ''

    const boldButton = bold ? 'bold-button' : ''
    const italicButton = italic ? 'italic-button' : ''
    const underlineButton = underLine ? 'underline-button' : ''
    return (
      <div className="app-container">
        <div className="text-editor-container">
          <div className="image-container">
            <h1 className="text-editor-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-image"
            />
          </div>

          <div className="text-input-container">
            <ul className="icons-container">
              <button
                type="button"
                data-testid="bold"
                className={`buttons ${boldButton}`}
                onClick={this.onClickBoldButton}
              >
                <li>
                  <VscBold size={25} />
                </li>
              </button>
              <button
                type="button"
                data-testid="italic"
                className={`buttons ${italicButton}`}
                onClick={this.onClickItalicButton}
              >
                <li>
                  <GoItalic size={25} />
                </li>
              </button>
              <button
                type="button"
                data-testid="underline"
                className={`buttons ${underlineButton}`}
                onClick={this.onClickUnderLineButton}
              >
                <li>
                  <AiOutlineUnderline size={25} />
                </li>
              </button>
            </ul>
            <hr size={2} className="hr-line" />
            <textarea
              rows="10"
              cols="30"
              placeholder="Enter text here..."
              className={`text-area ${boldText} ${italicText} ${underlineText}`}
              onChange={this.onChangeTextArea}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
