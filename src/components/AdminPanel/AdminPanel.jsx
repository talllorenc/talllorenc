import AddBeatForm from "./AddBeatForm";
import AddedBeats from "./AddedBeats";
import AdminInfo from "./AdminInfo";

const MusicPanel = ({ onLogout }) => {
  return (
    <div className="p-[16px]">
      <AdminInfo onLogout={onLogout} />
      <div className="flex justify-between mt-[40px]">
        <AddBeatForm />
        <AddedBeats />
      </div>
    </div>
  );
};

export default MusicPanel;
