import { styled } from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 255, 248, 0.5);
    pointer-events: none;
  }

  &:hover::after {
    content: url('/images/icon-view.svg');
    position: absolute;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;