import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "10",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;