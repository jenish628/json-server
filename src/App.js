import logo from './logo.svg';
import './App.css';

import Main from './Components/Main';
import img from './Components/image/img.jpg'


const App = () => {
  return (
    <>
      <div className="f">
            <h1> WELCOME </h1>
      </div>

      <div className="s">

            <h1> HELLO!!!
            </h1>
            <h2> WELCOME TO THE HOME-PAGE</h2>
            {/* <a href="" className="btn"> Get Started</a> */}
            <Main />
      </div>
      <div className="image">
             <img src={img} width="600" height="700" alt="image1" />
      </div>

    </>
  );
}

export default App;
