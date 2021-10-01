import { UserStatusType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import Btn from '@components/Btn';

interface IAuthedBtn {
  onClick?: () => void;
}

function BtnComponent({ onClick }: IAuthedBtn) {
  return (
    <Btn
      theme={'gradient'}
      title={'Buy'}
      className={'ilo-page_btn ilo-page_btn-gradient'}
      onClick={onClick}
    />
  );
}

const AuthedUserBtn = withAuthType([UserStatusType.AUTHED])(BtnComponent);

export default AuthedUserBtn;
