import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './context/WishlistContext';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
  <WishlistProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </WishlistProvider>
</AuthProvider>
)
