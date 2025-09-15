import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import './style/tailwind.css'
import './style/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store.ts'

// inject mui style first to make Tailwind styles override mui styles
const cache = createCache({ key: "mui", prepend: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CacheProvider value={cache}>
        <Provider store={store}>
        <App />
        </Provider>
      </CacheProvider>
  </StrictMode>,
)
