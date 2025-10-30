import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { store } from "./app/model/store.ts"
import { Provider } from "react-redux"
import "./styles/index.css"

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
