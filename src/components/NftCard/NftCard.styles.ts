import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--secondary-background-color);
  border-radius: 15px;
  height: fit-content;
  width: 250px;
  padding: 1em;
  gap: 1em;
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

  height: 2.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient:vertical;
  white-space: normal;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--secondary-color);
`;
