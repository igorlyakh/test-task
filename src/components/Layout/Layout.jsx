import Button from '@components/Button';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <aside>Layout</aside>
      <Button style="transparent">Test</Button>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default Layout;
