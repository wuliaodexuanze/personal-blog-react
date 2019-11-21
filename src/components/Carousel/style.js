import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;

  .slide-nav {
    position: absolute;
    top: 50%;
    margin-top: -32px;
    display: inline-block;
    opacity: 0;
    visibility: hidden;
    width: 40px;
    height: 62px;
    text-align: center;
    color: #d5d5d5;
    background: rgba(0,0,0,.3);

    span {
      position: relative;
      top: 7px;
    }
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  .show-enter {
    opacity: 0;
  }
  .show-enter-active {
    opacity: 1;
    visibility: visible;
    transition: all .3s ease-in;
  }
  .show-enter-done {
    opacity: 1;
    visibility: visible;
  }
  .show-exit {
    opacity: 1;
  }
  .show-exit-active {
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in;
  }
  .show-exit-done {
    opacity: 0;
    visibility: hidden;
  }
`;