import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CLICKOPENRATE_DATA } from "../../constants/clickOpenRateData";

// Define the inline styles
const styles = {
    revenueWrap: {
        background: "#FFFFFF",
        boxShadow: "0 0.25rem 1.125rem rgba(75, 70, 92, 0.1)",
        borderRadius: "6px",
        padding: "20px",
    },
    blockTitle: {
        fontSize: "20px",
        fontWeight: "700",
        color: "black",
    },
    blockContentWrap: {
        marginTop: "30px",
        width: "100%",
        height: "250px",
    },
    legendItem: {
        paddingTop: "10px",
    },
};

const formatTooltipValue = (value) => `${value} rates`;
const formatYAxisLabel = (value) => `${value}k`;
const formatLegendValue = (value) => {
    // Return "Click Rates" or "Open Rates" without duplicating "Rates"
    return value === "clickRates" ? "Click Rates" : "Open Rates";
};

const ClickOpenRate = () => {
    return (
        <div style={styles.revenueWrap}>
            <div className="block-head">
                <h3 style={styles.blockTitle}>Click/Open Rate</h3>
            </div>
            <div style={styles.blockContentWrap}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={CLICKOPENRATE_DATA}
                        margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                    >
                        <CartesianGrid stroke="#f8f8f9" horizontal vertical={false} strokeDasharray="3 0" />
                        <XAxis
                            dataKey="day"
                            tickSize={0}
                            axisLine={false}
                            tick={({ payload, x, y, dy }) => (
                                <text x={x} y={y + 25} dy={dy} textAnchor="middle" fill="#7B91B0" fontSize={14}>
                                    {payload.value}
                                </text>
                            )}
                        />
                        <YAxis
                            tickFormatter={formatYAxisLabel}
                            tickCount={6}
                            axisLine={false}
                            tickSize={0}
                            tick={{ fill: "#7B91B0", fontSize: 14 }}
                            interval={0}
                            ticks={[0, 5, 10, 15, 20, 25]}
                        />
                        <Tooltip cursor={{ fill: "transparent" }} formatter={formatTooltipValue} />
                        <Legend iconType="circle" iconSize={10} formatter={formatLegendValue} wrapperStyle={styles.legendItem} />
                        <Bar dataKey="clickRates" fill="#0095FF" radius={[4, 4, 4, 4]} barSize={18} />
                        <Bar dataKey="openRates" fill="#00E096" radius={[4, 4, 4, 4]} barSize={18} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ClickOpenRate;
