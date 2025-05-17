interface MyButton {
  label: string;
  clor?: string;
}
function ButtonProp({ label, clor }: MyButton) {
  const myStyle = {
    color: clor,
  };
  return <button style={myStyle}>{label}</button>;
}
export default function App() {
  return (
    <div>
      <ButtonProp label="Mountain" clor="pink" />
      <p>Hello</p>
      <p>I am staging it but not commiting it</p>
    </div>
  );
}
