import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Dot,
} from "recharts";
import PropTypes from "prop-types";
import { CLICKS_DATA } from "../../constants/clicksData";

const styles = {
  container: {
    maxWidth: "1320px",
    margin: "0 auto",
    padding: "0 16px",
  },
  clicksBlockWrap: {
    background: "#FFFFFF",
    borderRadius: "6px",
    padding: "20px",
  },
  blockTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#6B7280",
    marginBottom: "20px",
  },
  lineChart: {
    width: "100%",
    height: "230px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    marginRight: "8px",
    marginLeft: "8px",
  },
  rechartsSurface: {
    borderRadius: "2px",
  },
  tooltip: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
  },
};

const formatLegendValue = (value) => {
  return value.replace("_", " ");
};

const formatTooltipValue = (value, name) => {
  return `${value.replace("_", " ")}: ${name}`;
};

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div style={styles.tooltip}>
      <p>{payload[0].payload?.month}</p>
      <ul>
        {payload?.map((payloadItem, index) => {
          return (
            <li key={index}>
              {formatTooltipValue(payloadItem.name, payloadItem.value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CustomTooltipContent.propTypes = {
  payload: PropTypes.any,
};

const ClicksBlock = () => {
  return (
    <div style={styles.clicksBlockWrap}>
      <div className="block-head">
        <div style={styles.blockTitle}>
          <h3>Clicks Insights</h3>
        </div>
      </div>
      <div style={styles.lineChart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={CLICKS_DATA}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f8f8f9"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              padding={{ left: 20 }}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7B91B0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[100, 200, 300, 400]}
              tick={{
                fill: "#7B91B0",
                fontSize: 14,
              }}
            />
            <Tooltip content={<CustomTooltipContent />} />
            <Legend
              iconType="square"
              formatter={formatLegendValue}
              wrapperStyle={styles.legendItem}
            />
            <ReferenceLine
              isFront={true}
              x="May"
              stroke="#F64E60"
              strokeDasharray="3 3"
            >
              <Dot r={5} fill="#F64E60" />
            </ReferenceLine>
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="loyal_click"
              stroke="#A700FF"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="new_click"
              stroke="#F64E60"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="unique_click"
              stroke="#3CD856"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClicksBlock;
