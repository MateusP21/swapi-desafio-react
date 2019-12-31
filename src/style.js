import styled from 'styled-components'

export const Container = styled.div`
  max-width:700px;
  background-color:#282828;
  padding:10px;
  margin: 120px auto;
  border-radius: 4px;
  border: 2px solid #FFE81F
`
export const Card = styled.div`
  display:grid;
  grid-auto-flow:row;
  grid-gap:10px;
  h1 {
    text-align:center;
    font-size:48px;
  }
`
export const Button = styled.button`
  background-color:transparent;
  border-radius:2px;
  border: 2px solid #FF593E;
  padding: 8px;
  transition: all 0.3s;

  &:hover {
    background: #FF593E;
    color:#282828
  }
`

export const List = styled.ul`
  background:transparent;
  border: 2px solid #0BFFC6;
  border-radius:2px;
  padding:10px 10px;
  margin:10px 0;

  li {
    font-size:16px;
    margin:20px 0;
    color:#AEBEFF;
    border-left: 2px solid #BDC0CC;
    padding: 10px;
    text-transform:capitalize
  }

  span {
    font-size:18px;
    font-weight: bold;
  }
`