import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MemoriesSection from "./sections/memories";
import Countdown from "./helper/countdown";

const getTargetSep21 = () => {
  const now = new Date();
  const thisYear = new Date(now.getFullYear(), 8, 21, 12, 0, 0);
  return now > thisYear
    ? new Date(now.getFullYear(), 8, 21, 12, 0, 0)
    : thisYear;
};

const App = () => {
  const [targetDate] = React.useState(getTargetSep21);
  const [isDate, setIsDate] = React.useState(
    () => Date.now() >= targetDate.getTime()
  );
  const [error, setError] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [viewContent, setViewContent] = React.useState<boolean>(false);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === "12/19/2023") {
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
            <div className="d-flex flex-wrap align-items-center justify-content-center section w-100 text-primary">
              <span className="text-center">
                You are way too early to view this content!
              </span>
              <span className="text-center">
                Please wait until Sunday, September 21st, 2025, 12:00 PM.
              </span>
              <span className="mt-2">
                <Countdown
                  target={targetDate}
                  onComplete={() => setIsDate(true)}
                />
              </span>
              <span className="mt-2 animate-pulse" style={{ fontSize: "4rem" }}>
                ❤️
              </span>
            </div>
          )}

          {isDate && !viewContent && (
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
