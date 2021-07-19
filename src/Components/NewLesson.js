const NewLesson = (props) => {
  const addLessonHandler = (event) => {
    props.onSubmit(event.target);
  }

  return (
    <div>
      <form onSubmit={addLessonHandler}>
        <input type='text' placeholder="Lesson's Name" />
        <input type='text' placeholder="Teacher's Name" />
        <input type='date' />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewLesson;
