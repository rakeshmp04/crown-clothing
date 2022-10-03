import Directory from "./components/Directory/directory.component";
import { categories } from "./categories";


const App = () => {

  
  return (
    <Directory categories={categories} />
  );
}

export default App;
