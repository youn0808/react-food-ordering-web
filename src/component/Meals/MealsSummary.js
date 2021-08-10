import classes from "./MealsSummary.module.css";
const MealsSummary = (params) => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <span>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </span>

      <span>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </span>
    </div>
  );
};

export default MealsSummary;
