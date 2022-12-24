import './App.css';
import PrintPalindrome from './Printpalindrome';


function App() {
  const Min  = 100;
  const Max  = 100000;
   
   return (
    <>
    <PrintPalindrome minRange={Min} maxRange={Max}/>
    </>
    
  );
}

export default App;
