import Image from 'next/image';
import { HeaderContainer } from './header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Image src="/logo.svg" width="120px" height="40px" alt="image" />
      </div>
    </HeaderContainer>
  );
};
