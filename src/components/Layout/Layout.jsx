import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <aside>Layout</aside>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default Layout;
