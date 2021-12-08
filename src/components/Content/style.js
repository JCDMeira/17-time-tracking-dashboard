import styled from 'styled-components';

export const ContentDiv = styled.div`
  width: 100%;
  height: 135.5rem;

  display: grid;
  grid-gap: 2.4rem;
  padding: 2.4rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);

  @media (min-width: 1200px) {
    width: 117.1rem;
    height: 57.8rem;
    grid-gap: 3rem;
    padding: 3rem;
    grid-template-columns: repeat(4, 256px);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'avatarCard card0 card1 card2'
      'avatarCard card3 card4 card5';
  }
`;
