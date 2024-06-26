import Layout from '@components/Layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<div>Welcome</div>}
        />
        <Route
          path="catalog"
          element={<div>Catalog</div>}
        />
        <Route
          path="favorite"
          element={<div>Favorite</div>}
        />
      </Route>
      <Route
        path="*"
        element={<div>404</div>}
      />
    </Routes>
  );
};

export default App;
