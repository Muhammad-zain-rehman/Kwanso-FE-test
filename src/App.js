import './App.css';
import { BrowserRouter } from "react-router-dom";
import BaseRoutes from './routes/BaseRoutes';



function App() {
  return (
    <div>
      <BrowserRouter>
        <BaseRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;
