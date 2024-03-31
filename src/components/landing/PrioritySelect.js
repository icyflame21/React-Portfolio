import classNames from "classnames";
import "../../CSS/GradientText.css";

export const PrioritySelect = ({ title, color, data, className, style }) => {
  return (
    <div
      style={style}
      className={classNames("d-flex align-items-center gap-2", className)}
    >
      <div style={{ "--falcon-circle-progress-bar": data }}>
        <svg
          className="circle-progress-svg"
          width="26"
          height="26"
          viewBox="0 0 120 120"
        >
          <circle
            className="progress-bar-rail"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeLinecap="round"
            strokeWidth="12"
          ></circle>
          <circle
            className="progress-bar-top"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeLinecap="round"
            stroke={color}
            strokeWidth="12"
          ></circle>
        </svg>
      </div>
      <h6 className="mb-0 gray1">{title}</h6>
    </div>
  );
};
