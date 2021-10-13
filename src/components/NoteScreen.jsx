import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  return (
    <div className="note__main-context">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some Awesome Title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"
            alt="Playa"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
