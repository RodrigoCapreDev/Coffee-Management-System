import CoffeeCard from "./CoffeeCard";

function CoffeeList({ coffees, onEdit, onDelete }) {
  return (
    <div className="row g-4">
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          coffee={coffee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default CoffeeList;
