import Directory from '../../components/Directory/directory.component';
import { categories } from '../../categories';
import { Outlet } from 'react-router-dom';


const Home = () => {

  
  return (
    <div>
        <Directory categories={categories} />
        <Outlet />
    </div>
  
  );
}

export default Home;
