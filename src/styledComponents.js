import styled from 'styled-components'

export const CustomButton = styled.button`
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
  border: 0;
  margin-left: 15px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const UnderlineButton = styled(CustomButton)`
  color: ${props => (props.underLine ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled(CustomButton)`
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const TextArea = styled.textarea`
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underLine ? 'underline' : 'normal')};
  height: 80%;
  width: 100%;
  background-color: transparent;
  border: 0;
  padding: 10px;
  cursor: pointer;
  outline: none;
  color: #f1f5f9;
`

export const UnOrderList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
`
export const TextInputContainer = styled.div`
  width: 45%;
  background-color: #334155;
  border-radius: 8px;
  padding: 20px 40px;
  height: 650px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ApplicationContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  padding: 80px;
`
export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1b1c22;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 30px;
`
export const MainHeading = styled.h1`
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 20px;
`
export const TextEditorImage = styled.img`
  width: 80%;
  margin-top: 20px;
`
