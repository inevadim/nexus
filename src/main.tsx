import { createRoot } from "react-dom/client";
import App from "./app/ui/App/App.tsx";
import { store } from "./app/model/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
