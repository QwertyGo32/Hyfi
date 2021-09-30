import styled from 'styled-components';
import bgrImg from '@img/infographic9.jpg';
import breakpoints from '@styles/constants.styled';
import DataContainer from '@components/DataContainer';

export const StyledDataContainer = styled(DataContainer)`
  .header {
    min-height: 78px;
  }
`;

export const StyledIloBlockImg = styled.img`
  border-radius: 0 10px 10px 0;
  width: 100%;
  @media screen and ${breakpoints.Device.desktop} {
    display: none;
  }

  @media screen and ${breakpoints.Device.tablet} {
    display: none !important;
  }
`;

export const StyledIloWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const IloWrapperHead = () => {
  return (
    <StyledIloWrapperHead>
      <StyledIloWrapperHeadContainer>
        <StyledIloWrapperHeadTitle>ILO</StyledIloWrapperHeadTitle>
        <StyledIloWrapperHeadText>
          Owners that seek to raise money for their development of New
          technologies; IP, Patents Licenses, Brands and Projects (“Assets”) can
          sell up to a 49% interest in their Assets on the HYFI Platform with a
          right to buy back interests sold. We will introduce your Assets to our
          Global network of Brokers who will introduce Investors (Institutional,
          Corporations, Family Offices, Private Wealth and Individuals) who may
          buy fractional interests in your Assets.
        </StyledIloWrapperHeadText>
      </StyledIloWrapperHeadContainer>
    </StyledIloWrapperHead>
  );
};

const StyledIloWrapperHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  background: url(${bgrImg}) no-repeat bottom/cover;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`;

const StyledIloWrapperHeadContainer = styled.div`
  width: 90%;
  max-width: 1266px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
`;

const StyledIloWrapperHeadTitle = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #001218;
`;

const StyledIloWrapperHeadText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #001218;
`;

export const StyledIloBlock = styled.div`
  width: 90%;
  max-width: 1266px;
  display: grid;
  grid-template-columns: 1fr 25%;
  align-items: stretch;
  box-shadow: 0 3px 5px #acb7c270;
  border-radius: 10px;
  background: white;
  margin: 30px auto;
  @media screen and ${breakpoints.Device.desktop} {
    grid-template-columns: 1fr;
  }

  @media screen and ${breakpoints.Device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyledIloContainer = styled.div`
  padding: 59px 30px 63px 60px;

  @media screen and ${breakpoints.Device.desktop} {
    width: 100%;
  }

  @media screen and ${breakpoints.Device.tablet} {
    width: 100% !important;
  }

  @media screen and ${breakpoints.Device.mobile} {
    padding: 59px 10px 63px 20px;
  }
`;

export const IloHead = () => {
  return (
    <StyledIloHead>
      <StyledIloHeadTitle>HyFi</StyledIloHeadTitle>
      <StyledIloHeadText>
        nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam
        tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit
        massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae
        et leo duis ut diam quam nulla porttitor massa id neque aliquam
        vestibulum morbi blan.
      </StyledIloHeadText>
    </StyledIloHead>
  );
};

const StyledIloHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d1d9e1;
`;

const StyledIloHeadTitle = styled.h2`
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #001218;
`;

const StyledIloHeadText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #001218;
`;

export const StyledIloContainerBlocks = styled.div`
  width: 100%;
  display: grid;
  gap: 5px 30px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-bottom: 30px;
`;

export const StyledIloContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  border-bottom: 1px solid var(--main-default-link-color);

  .info {
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0;
    color: var(--main-text-default);
    opacity: 1;
    margin: 0;
    padding-bottom: 9.5px;
    span {
      font-weight: bold;
      color: var(--main-text-colored);
    }
  }
`;

export const StyledIloContainerInptBtn = styled.div`
  /* width: 50%; */
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
  .ilo-page_btn {
    &-gradient {
      width: max-content;
      align-self: flex-start;
      @media screen and ${breakpoints.Device.tablet} {
        width: auto;
      }
    }
  }
  @media screen and ${breakpoints.Device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media screen and ${breakpoints.Device.desktop} {
    width: 100%;
  }
`;

export const StyledIloBlockTitle = styled.p`
  font-family: Montserrat, serif;
  font-size: 12px;
  line-height: 15px;
  color: #001218;
  margin-bottom: 0;
`;
