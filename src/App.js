import { NavSidebar } from './NavSidebar';
import { Home } from './Home';
import { About } from './About';
import { Education } from './Education';
//import './scss/App.scss';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <>
      <Home />
      <About />
      <Education />
      <NavSidebar />
    </>
  );
}

export default App;
