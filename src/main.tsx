import { createRoot } from "react-dom/client"
import App from "./app/ui/App/App.tsx"
import { store } from "./app/model/store.ts"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
