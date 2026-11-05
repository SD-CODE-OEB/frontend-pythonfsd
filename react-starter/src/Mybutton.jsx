function Mybutton() {
  return (
    <button type="button" className="border p-4 rounded-2xl">
      I am a button
    </button>
  );
}

function YourButton({ text, onClickFunc }) {
  return (
    <button
      type="button"
      className="border px-4 py-2 rounded-2xl cursor-pointer"
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
}
export { Mybutton, YourButton };
