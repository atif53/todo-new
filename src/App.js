import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div style = {containerStyle} >
      <Header />
      <Button/>
    </div>
  );
}
const containerStyle = {
  display: 'flex',
  marginLeft: '3rem',
  justifyContent: 'space-between'
}
export default App;
