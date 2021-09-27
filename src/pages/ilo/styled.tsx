import styled from 'styled-components';
import bgrImg from '@img/infographic9.jpg';
import breakpoints from '@styles/constants.styled';

export const StyledIloBlockImg = styled.img`
  border-radius: 0 10px 10px 0;
  
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
      <StyledIloWrapperHeadTitle>
        ILO
      </StyledIloWrapperHeadTitle>
      <StyledIloWrapperHeadText>
        Owners that seek to raise money for their development of New technologies; IP, Patents Licenses, Brands and
        Projects (“Assets”) can sell up to a 49% interest in their Assets on the HYFI Platform with a right to buy back
        interests sold. We will introduce your Assets to our Global network of Brokers who will introduce Investors
        (Institutional, Corporations, Family Offices, Private Wealth and Individuals) who may buy fractional interests
        in your Assets.
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
  background: url(${bgrImg}) no-repeat center/cover;
  
  @media screen and ${breakpoints.Device.mobile} {
    padding: 20px ;
  }
`;

const StyledIloWrapperHeadContainer = styled.div`
  width: 90%;
  max-width: 1266px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledIloWrapperHeadTitle = styled.h1`
  font: normal normal bold 40px/50px Montserrat;
  color: #001218;

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 20px;
    line-height: 25px;
  }
`;

const StyledIloWrapperHeadText = styled.p`
  font: normal normal normal 20px/27px Montserrat;
  color: #001218;

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const StyledIloBlock = styled.div`
  width: 90%;
  max-width: 1266px;
  display: flex;
  box-shadow: 0 3px 5px #ACB7C270;
  border-radius: 10px;
  background: white;
  margin: 30px auto;
`;

export const StyledIloContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
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
      <StyledIloHeadTitle>
        HyFi
      </StyledIloHeadTitle>
      <StyledIloHeadText>
        nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh
        tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo
        duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blan.
      </StyledIloHeadText>
    </StyledIloHead>
  );
};

const StyledIloHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #D1D9E1;
`;

const StyledIloHeadTitle = styled.h2`
  font: normal normal 900 20px/24px Montserrat;
  color: #001218;
`;

const StyledIloHeadText = styled.p`
  font: normal normal medium 14px/24px Montserrat;
  color: #001218;
`;

export const StyledIloContainerBlocks = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const StyledIloContainerInptBtn = styled.div`
  width: 50%;
  display: flex;
  height: 35px;
  
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