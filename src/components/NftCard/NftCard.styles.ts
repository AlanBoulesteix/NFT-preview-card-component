import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--secondary-background-color);
  border-radius: 15px;
  height: fit-content;
  width: 250px;
  padding: 1em;
  gap: 1em;
`;

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

export const NftTitle = styled.h3`
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: var(--accent-color);
  }
`;

export const NftDescription = styled.p`
  font-weight: 300;
  margin: 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--secondary-color);
`;
