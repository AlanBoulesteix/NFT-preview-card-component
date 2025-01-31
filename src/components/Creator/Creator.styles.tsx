import { styled } from 'styled-components';

export const CreatorDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  margin-top: 0.8em;
`;

export const CreatorImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 33px;
  height: 33px;
  overflow: hidden;
  border: 1px solid var(--primary-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CreatorName = styled.strong`
  font-weight: normal;

  &:hover {
    cursor: pointer;
    color: var(--accent-color);
  }
`;

export const CreatorText = styled.p`
  font-size: 0.8em;
`;