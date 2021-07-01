import css from "./StatisticSection.module.css";
import RandomColor from "../../utils/RandomColor";
function StatisticSection({ statistics }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {statistics.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: "#" + RandomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{`${percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticSection;
