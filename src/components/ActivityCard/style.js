import styled from 'styled-components';

export const ActivityCardConteiner = styled.div`
  width: 87.2vw; //327
  height: 16rem;
  border-radius: 1.5rem;
  background: var(--orange);
  position: relative;
  overflow: hidden;

  .activityIcon {
    position: absolute;
    z-index: 2;
    right: 1.6rem;
    top: -1.1rem;
  }

  .info {
    width: 100%;
    height: 12.2rem;
    background: var(--dark-blue);
    border-radius: 1.5rem;

    position: absolute;
    bottom: 0;

    padding: 2.8rem 2.4rem 0 2.4rem;

    display: flex;
    justify-content: space-between;

    z-index: 10;

    img {
      position: absolute;
      right: 2.4rem;
      top: 3.7rem;
    }

    .current {
      height: 6.1rem;
      h1 {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.1rem;

        color: var(--white);

        span {
          display: block;
          margin-top: 0.8rem;

          font-weight: 300;
          font-size: 3.2rem;
          line-height: 3.8rem;
        }
      }
    }

    .last {
      height: 6.1rem;
      display: flex;
      align-items: flex-end;
      padding-bottom: 0.5rem;
      h2 {
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 1.8rem;

        color: var(--pale-blue);
      }
    }
  }

  @media (min-width: 1200px) {
    width: auto;
    height: auto;
    grid-area: ${`card${(props) => props.tagCard}`};

    .info {
      width: 25.6rem;
      height: 20rem;
      flex-direction: column;
      padding: 3.2rem 2.4rem 0 2.9rem;
      img {
        right: 2.9rem;
        top: 3.7rem;
      }

      .current {
        h1 {
          span {
            margin-top: 2.3rem;

            font-weight: 300;
            font-size: 5.6rem;
            line-height: 6.6rem;
          }
        }
      }

      .last {
        align-items: flex-start;
        padding-bottom: 0.5rem;
        h2 {
          margin-top: 1.1rem;
        }
      }
    }
  }
`;
