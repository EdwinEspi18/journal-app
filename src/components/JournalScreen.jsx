import NothingSeleceted from './NothingSeleceted';
import SideBar from './SideBar';
import NoteScreen from './NoteScreen';
const JournalScreen = () => {
  return (
    <div className="journal__main-context">
      <SideBar />

      <main>
        {/* <NothingSeleceted /> */}
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
