import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

function ProductCard(props) {
  const handleClick = () => {
    alert(`Buy ${props.name}`);
  };

  return (
    <Card>
      <div className="h-80 bg-card rounded-lg p-4 relative">
        <img src={props.image} className="block" alt="AirPods Max" />
      </div>
      <div className="flex items-center justify-between px-4 mt-4">
        <h2 className="text-lg font-semibold ">{props.name}</h2>

        <span className="text-base font-medium">{props.price}</span>
      </div>
      <div className="px-4 mt-2">
        <p className="text-sm">{props.desc}</p>
      </div>
      <div className="mt-1 p-4">
        <Button className="w-full " onClick={handleClick}>
          Buy Now
        </Button>
      </div>
    </Card>
  );
}
export default ProductCard;
