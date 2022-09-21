
interface Props {
  onClick: () => void;
  children: React.ReactNode
}

function Button({ onClick, children }: Props) {
  console.log(`Rendering button - `, children);
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
