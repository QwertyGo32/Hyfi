import { Title, Text, HomeWrapper } from './styled';
import Btn, { gradientBtnTypes } from '@components/Btn';
import ConnectWallet from '@components/ConnectWallet';
import { useAppDispatch } from '@utils/hooks';
import { openConnectWallet } from '@redux/modal';

const HomePage = () => {
  const dispatch = useAppDispatch();

  return (
    <HomeWrapper>
      <Title>
        Lorem ipsum is placeholder text commonly used in the graphic
      </Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam
      </Text>
      <Btn
        className="home-page_btn"
        theme={gradientBtnTypes.gradient}
        title="Connect Wallet"
        onClick={() => {
          dispatch(openConnectWallet(true));
        }}
      />
      {/* <Btn theme={gradientBtnTypes.outline} title="Trade Now" /> */}
      <ConnectWallet />
    </HomeWrapper>
  );
};
export default HomePage;
