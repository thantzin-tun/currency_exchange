import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @font-face {
        font-family: roboto;
        src: url(../assets/fonts/Roboto/Roboto-Light.ttf);
    }

    body {
        font-family: roboto;
        min-height: 100vh;
    }

    //Input Form
    .form-control:focus {
        outline: none;
        box-shadow: none;
    }

    //Active Navigation Link
    .active {
        font-weight: bolder;
    }

    //Animated.css (add my_animation_appear)
    .my_animation_appear {
        animation-name: fadeIn;
        animation-duration: 2s; 
 
    }

    .content {
        border: 5px solid red;
        border-radius: 10px;
    }
}
  
`;
