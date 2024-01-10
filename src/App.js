import Navbar from './components/Navbar';
import MyFigure from './components/MyFigure';
import MySection from './components/MySection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className='flex justify-between'>
        <MySection />
        <MyFigure />
      </main>
    </>
  );
}

export default App;
