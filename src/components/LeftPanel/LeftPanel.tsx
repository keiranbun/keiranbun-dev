import ContactPanel from "./ContactCard/ContactCard";
import FacePanel from "./FaceCard";

const LeftPanel = () => {
  return (
    <div className="border-3 px-5 py-5 flex flex-col items-center gap-5 shadow-lg rounded-xl min-w-80">
      <FacePanel />
      <ContactPanel />
    </div>
  );
};

export default LeftPanel;
