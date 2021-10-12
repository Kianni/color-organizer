import Color from "./Color.js";

export default function ColorList({ colors = [], onRemoveColor, onRateColor }) {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
