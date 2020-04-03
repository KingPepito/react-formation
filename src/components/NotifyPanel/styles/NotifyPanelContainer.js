import styled from 'styled-components'

const NotifyPanelContainer = styled.div`
  width: 400px;
  height: 100px;
  padding: 16px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 4px;
  background-color: ${({color}) => color};
`

export default NotifyPanelContainer