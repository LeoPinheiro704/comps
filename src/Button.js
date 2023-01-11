import propTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return (
    <button className="px-3 py-1.5 border border-red-600 bg-red-500 text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      +!!primary + +!!secondary + +!!warning + +!!success + +!!danger;
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, warning, danger can be true"
      );
    }
  },
};

export default Button;
