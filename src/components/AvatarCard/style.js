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

    div {
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

      span {
        font-size: 2.35rem;
        line-height: 2.8rem;
        display: block;
        margin-top: 0.5rem;
      }
    }
  }

  .activeTime {
    width: 27.3rem;
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0 0 3.4rem;
  }
`;

export const MyParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 2.1rem;

  color: ${(props) =>
    props.period === true ? 'var(--white)' : 'var(--desaturated-blue)'};
`;
