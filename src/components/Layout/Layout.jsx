import Tag from '@components/Tag';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <aside>Layout</aside>
      <Tag />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default Layout;
