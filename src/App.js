import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {
  CustomButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
  UnOrderList,
  TextInputContainer,
  ApplicationContainer,
  TextEditorContainer,
  ImageContainer,
  MainHeading,
  TextEditorImage,
} from './styledComponents'

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
    return (
      <ApplicationContainer className="app-container">
        <TextEditorContainer className="text-editor-container">
          <ImageContainer className="image-container">
            <MainHeading className="text-editor-heading">
              Text Editor
            </MainHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-image"
            />
          </ImageContainer>

          <TextInputContainer className="text-input-container">
            <UnOrderList className="icons-container">
              <li>
                <CustomButton
                  type="button"
                  data-testid="bold"
                  bold={bold}
                  onClick={this.onClickBoldButton}
                >
                  <VscBold size={25} />
                </CustomButton>
              </li>
              <li>
                <ItalicButton
                  italic={italic}
                  type="button"
                  data-testid="italic"
                  onClick={this.onClickItalicButton}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  underLine={underLine}
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickUnderLineButton}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </UnOrderList>
            <hr size={2} className="hr-line" />
            <TextArea
              rows="10"
              cols="30"
              placeholder="Enter text here..."
              bold={bold}
              italic={italic}
              underLine={underLine}
              onChange={this.onChangeTextArea}
            />
          </TextInputContainer>
        </TextEditorContainer>
      </ApplicationContainer>
    )
  }
}

export default App
