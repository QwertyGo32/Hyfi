import { Home, Title, Text, HomeWrapper } from '@pages/HomePage/styled';
import Btn, { gradientBtnTypes } from '@components/Btn';

const HomePage = () => {
  return (
    <Home className='home-page'>
      <HomeWrapper>
        <Title>
          Lorem ipsum is placeholder text commonly used in the graphic
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua enim ad minim veniam
        </Text>
        <Btn className='home-page_btn' theme={gradientBtnTypes.gradient} title='Connect Wallet' />
        <Btn theme={gradientBtnTypes.outline} title='Trade Now' />
      </HomeWrapper>
    </Home>
  );
};
export default HomePage;
