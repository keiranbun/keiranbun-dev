import LeftPanel from "../components/LeftPanel/LeftPanel";
import RightPanel from "../components/RightPanel/RightPanel";

const isDevEnv = import.meta.env.MODE;

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-row justify-center mt-5">
        {isDevEnv ? (
          <>
            <LeftPanel />
            <RightPanel />
          </>
        ) : (
          <WIP />
        )}
      </div>
    </div>
  );
};

const WIP = () => {
  return (
    <div className="flex flex-row justify-center mt-5">
      <p className="text-2xl">keiranbun.dev is still being built</p>
    </div>
  );
};

export default Homepage;
