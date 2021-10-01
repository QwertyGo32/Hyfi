import {
  Title,
  Text,
  HomeWrapper,
  InfoContainer,
  HomeWrappperContainer,
  StyledBtn,
} from './styled';
import { gradientBtnTypes } from '@components/Btn';
import { useAppDispatch } from '@utils/hooks';
import { openConnectWallet } from '@redux/modal';
import ImageBadge from './components/ImageBadge';
import bgr from '@img/Rectangle.png';

const HomePage = () => {
  const dispatch = useAppDispatch();

  return (
    <HomeWrappperContainer>
      <HomeWrapper>
        <Title>
          Trade, Earn and Participate in the NFT License Marketplace!
        </Title>
        <Text>
          The HyFi economy uses Business Innovation, Blockchain & Digital
          Currency to accelerate renewable energy, environment, agriculture and
          other important markets and causes. Help us create a better world by
          joining the HyFi Platform!
        </Text>
        <StyledBtn
          theme={gradientBtnTypes.gradient}
          title="Connect Wallet"
          onClick={() => {
            dispatch(openConnectWallet(true));
          }}
        />
      </HomeWrapper>
      <InfoContainer>
        <ImageBadge text="ILO NFTs Available Now!" img={bgr} />
        <ImageBadge text="Staking (Coming Soon)" img={bgr} />
        <ImageBadge text="Trading (Coming Soon)" img={bgr} />
        <ImageBadge text="Farming (Coming Soon)" img={bgr} />
      </InfoContainer>
    </HomeWrappperContainer>
  );
};
export default HomePage;
