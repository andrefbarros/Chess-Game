interface TileProps {
  image?: string;
  number: number;
}

export default function Tile({ number, image }: TileProps) {
  if (number % 2 === 0) {
    return (
      <div className="w-16 h-16 bg-blue-600">
        <img src={image} />
      </div>
    );
  } else {
    return (
      <div className="w-16 h-16 bg-slate-200">
        <img src={image} />
      </div>
    );
  }
}
