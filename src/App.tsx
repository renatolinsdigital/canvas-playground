import Home from "@/domain/pages/Home";
import { AppFooter, AppHeader } from "@/domain/components";

function App() {
  return (
    <div className="app-container font-text light">
      <AppHeader />
      <main className="app-content">
        <Home></Home>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
