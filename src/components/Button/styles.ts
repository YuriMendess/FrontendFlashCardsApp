import styled from 'styled-components';

export const Button = styled.button`
    padding: .75rem .5rem;
    width: 100%;
    max-width: 300px;
    display: inline-flex;
    justify-content: center;
    border-radius: .5rem;
    font-weight: 600;
    background-color: green;
    border: none;
    color: #FFF;
    cursor: pointer;

    &:hover {
        background-color: blue;
    }

    
    // display: block;
    // height: 50px;
    // width: 186px;
    // position: relative;
    // overflow: hidden;
    // text-decoration: none;
    // letter-spacing: 2px;
    // text-align: center;
        
        
    // &:after {
    //     position: absolute;
    //     content:'';
    //     display: inline-block;
    //     background-color: rgba(59,173,227,1);
    //     background-image: linear-gradient(
    //         45deg, rgba(59,173,227,1) 0%,
    //         rgba(87,111,230,1) 25%,
    //         rgba(152,68,183,1) 51%,
    //         rgba(255,53,127,1) 100%);
    //     height: 50px;
    //     width: 372px;
    //     z-index: -1;
    //     transform: translateX(-280px);
    //     transition: transform 400ms ease-in;
    //   }
      
    //   &:hover {
    //     &:after {
    //       transform: translateX(-200px);
    //     }
    // }
    
`;