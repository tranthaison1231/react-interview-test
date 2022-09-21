
function Count({ text, count }: { text: string, count: number}) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default Count;
