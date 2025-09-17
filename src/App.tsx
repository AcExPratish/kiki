import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MemoriesSection from "./sections/memories";

const App = () => {
  const [viewContent, setViewContent] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === "1219") {
      setViewContent(true);
    } else {
      setError("You don't event know our anniversary date! 😔");
    }
  };

  React.useEffect(() => {
    setViewContent(false);
  }, []);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="page-root">
        <main className="main-container">
          {!viewContent ? (
            <div className="d-flex align-items-center justify-content-center section w-100">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Hint: It's a date"
                value={password}
                onChange={handlePassword}
                className="form-control w-25 py-2 border-romantic"
              />

              {error && <p className="text-primary small mt-1">{error}</p>}
            </div>
          ) : (
            <MemoriesSection />
          )}
        </main>
      </div>
    </>
  );
};

export default App;
