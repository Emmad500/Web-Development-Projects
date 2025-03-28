import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'; // ✅ Import persistor
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  {/* ✅ Fix applied */}
    <PersistGate loading={null} persistor={persistor}> {/* ✅ PersistGate added */}
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
