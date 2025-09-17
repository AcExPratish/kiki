import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MemoriesSection from "./sections/memories";
import Countdown from "./helper/countdown";

const checkDate = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return month === 8 && day === 21 && hour === 12 && minute === 0;
};

const getTargetSep21 = () => {
  const now = new Date();
  const target = new Date(now.getFullYear(), 8, 21, 12, 0, 0);
  return now > target ? new Date(now.getFullYear(), 8, 21, 12, 0, 0) : target;
};
const targetDate = getTargetSep21();

const App = () => {
  const isDate = checkDate();
  const [viewContent, setViewContent] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === "1219") {
      setViewContent(true);
    } else {
      setError("Wrong! Try again! 😔");
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
          {!isDate && (
            <div className="d-flex align-items-center justify-content-center section w-100 text-primary">
              <span>You are way too early to view this content!</span>
              <span>Please wait until Sunday, September 21st, 2025.</span>
              <Countdown target={targetDate} />
            </div>
          )}

          {!viewContent && (
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
          )}

          {isDate && !viewContent && <MemoriesSection />}
        </main>
      </div>
    </>
  );
};

export default App;
