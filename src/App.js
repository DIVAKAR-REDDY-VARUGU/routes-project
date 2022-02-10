import {Route, Routes,Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import ContactUs from './ContactUs';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  // const [count,setcount]=useState(0);
  const [active,setactive]=useState('Home')
  return (
    <div className="App">
      {/* <p> no of clicks {count}</p> */}
      {/* <button onClick={()=>setcount(count+1)}>click me </button> */}
      <div className='Navigation'>
        <Link to='/' onClick={()=>setactive('Home')} className={ (active=='Home')?'active':'unactive' }>Home </Link>
        <Link to='/ContactUs'onClick={()=>setactive('contact')} className={ (active=='contact')?'active':'unactive' }>contact us </Link>
        <Link to='/Profile'onClick={()=>setactive('profile')} className={ (active=='profile')?'active':'unactive' }>Profile </Link>
      </div>
      <Routes>
        {/* <Route path='/' element={<>hello bro notthing is there here </>} /> */}
        <Route path='/' element={<Home/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='/Profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
