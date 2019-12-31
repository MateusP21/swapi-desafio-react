import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap');
  * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
  }

  html,body,#root {
    min-height:100%
  }

  body {
    background-image: linear-gradient(to left, lightblue,lightpink);
    -webkit-font-smoothing: antialised !important;
  }

  body,input,button {
    font-family:'QuickSand', sans-serif;
    color:#EFD800;
    font-size:14px;
  }

  button {
    cursor:pointer
  }

   li {
     list-style:none
   }
`