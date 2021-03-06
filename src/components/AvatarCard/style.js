import styled from 'styled-components';

export const AvatarCardConteiner = styled.div`
  width: 87.2vw; //327
  height: 20.3rem;
  border-radius: 1.5rem;
  background: var(--dark-blue);

  .infoCard {
    width: 100%;
    height: 13.3rem;
    background: var(--blue);
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    padding-left: 2.9rem;

    .avatarPhoto {
      width: 7rem;
      height: 7rem;
      background: var(--white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.7rem;

      img {
        width: 6.6rem;
        height: 6.6rem;
      }
    }

    h1 {
      font-size: 1.5rem;
      line-height: 1.8rem;
      color: var(--white);
      font-weight: 400;
      color: var(--pale-blue);

      span {
        font-size: 2.35rem;
        line-height: 2.8rem;
        display: block;
        margin-top: 0.5rem;
        color: var(--white);
      }
    }
  }

  .activeTime {
    width: 72.8vw;
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0 0 3.4rem;
  }

  @media (min-width: 1200px) {
    width: auto;
    height: auto;
    grid-area: avatarCard;

    .infoCard {
      width: 25.6rem;
      height: 35.4rem;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 3.4rem 0 0 3rem;

      .avatarPhoto {
        width: 8.4rem;
        height: 8.4rem;
        margin-bottom: 3.4rem;

        img {
          width: 8rem;
          height: 8rem;
        }
      }

      h1 {
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-top: 0.6rem;
        margin-left: 0.2rem;

        span {
          font-weight: 300;
          font-size: 4rem;
          line-height: 4.8rem;
          margin-top: 0.3rem;
        }
      }
    }
    .activeTime {
      width: 20rem;
      height: 10.4rem;
      flex-direction: column;
      justify-content: space-between;
      margin: 2.7rem 0 0 3.2rem;
    }
  }
`;

export const MyParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 2.1rem;

  color: ${(props) =>
    props.period === true ? 'var(--white)' : 'var(--desaturated-blue)'};

  cursor: pointer;
`;
