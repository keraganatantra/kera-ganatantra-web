import { budgets } from "./data/budget";

const budgetsMap: Record<string, { label: string; amountBn: number }> =
  budgets as any;
import { scandals } from "./data/scandal";

interface ScandalImpactChartProps {
  selectedCase: (typeof scandals)[number] | null;
}

export default function ScandalImpactChart({
  selectedCase,
}: ScandalImpactChartProps) {
  if (!selectedCase) return null;

  // Helper to format billions
  function fmtBn(v: number | null | undefined) {
    if (v === null || v === undefined) return "—";
    return (
      (v < 1 ? v.toFixed(3) : v.toFixed(2))
        .replace(/0+$/, "")
        .replace(/\.$/, "") + "B"
    );
  }

  const amountBn = selectedCase.amountBn ?? null;
  const totalFederal = budgets.totalFederal.amountBn;

  // Source link
  const source = selectedCase.ref ? (
    <a
      className="impact-source"
      href={selectedCase.ref}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#ffe600", marginLeft: 8, fontSize: "0.95em" }}
    >
      Source ↗
    </a>
  ) : null;

  // Header
  const header = (
    <div style={{ fontWeight: 600, marginBottom: 8 }}>
      <span style={{ color: "#ffe600" }}>{selectedCase.label}</span>
      {amountBn !== null && (
        <span style={{ marginLeft: 12, color: "#fff" }}>
          Amount: <strong>{fmtBn(amountBn)}</strong>
        </span>
      )}
      {source}
    </div>
  );

  // Percent of total federal budget
  let totalLine = null;
  if (amountBn !== null && totalFederal && totalFederal > 0) {
    const pctTotal = (amountBn / totalFederal) * 100;
    totalLine = (
      <div style={{ marginBottom: 8, color: "#ffe600" }}>
        <span style={{ color: "#ffe600" }}>{pctTotal.toFixed(2)}%</span> of
        Total Federal Budget ({fmtBn(totalFederal)})
      </div>
    );
  }

  // Use budgets as scenarios

  // Dynamically get scenario keys from budgets, excluding totalFederal
  const scenarioKeys = Object.keys(budgets).filter(
    (key) => key !== "totalFederal"
  );

  const scenarioConfigs: Record<
    string,
    { type: "times" | "percent"; scaleMax?: number }
  > = {
    midMeal: { type: "times", scaleMax: 5 },
    education: { type: "percent", scaleMax: 100 },
    health: { type: "percent", scaleMax: 100 },
    physicalInfra: { type: "percent", scaleMax: 100 },
    agriculture: { type: "percent", scaleMax: 100 },
    capital: { type: "percent", scaleMax: 100 },
    recurrent: { type: "percent", scaleMax: 100 },
    homeAffairs: { type: "percent", scaleMax: 100 },
  };

  let bars = null;
  if (amountBn !== null) {
    bars = (
      <div style={{ marginBottom: 16 }}>
        {scenarioKeys.map((key) => {
          const budget = budgetsMap[key];
          if (!budget) return null;
          const config = scenarioConfigs[key];
          let val = 0;
          let metric = "";
          let width = 0;
          if (config.type === "times") {
            val = amountBn / budget.amountBn;
            width = Math.min((val * 100) / (config.scaleMax || 5), 100);
            metric = `${val.toFixed(2)}×`;
          } else {
            val = (amountBn / budget.amountBn) * 100;
            width = Math.min(val, 100);
            metric = `${val.toFixed(2)}%`;
          }
          return (
            <div key={key} style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: "1.05em",
                  marginBottom: 4,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>{budget.label}</span>
                <span
                  style={{
                    marginLeft: 8,
                    color: "#ffe600",
                    fontSize: "0.95em",
                    cursor: "help",
                  }}
                  title={`Calculation: ${
                    config.type === "times"
                      ? `Scandal Amount / ${budget.label}`
                      : `Scandal Amount as % of ${budget.label}`
                  }`}
                >
                  ⓘ
                </span>
              </div>
              <div
                style={{
                  background: "#222",
                  borderRadius: 8,
                  height: 22,
                  position: "relative",
                  marginBottom: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px #ffe60022",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div
                  style={{
                    width: `${width}%`,
                    background: "linear-gradient(90deg, #ffe600, #ffc400)",
                    height: "100%",
                    borderRadius: 8,
                    transition: "width 0.7s cubic-bezier(.4,2,.3,1)",
                  }}
                ></div>
                <span
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 2,
                    color: "#ffe600",
                    fontWeight: 700,
                    fontSize: "1em",
                    textShadow: "0 1px 2px #ffe60088",
                  }}
                >
                  {metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Disclaimer for missing amount
  if (amountBn === null) {
    return (
      <div className="scandal-impact-chart" style={{ margin: "24px 0" }}>
        {header}
        <p style={{ marginTop: 8, color: "var(--mute)", fontSize: 14 }}>
          No verified public amount yet. Once disclosed, funding equivalence
          will appear.
        </p>
      </div>
    );
  }

  return (
    <div className="scandal-impact-chart" style={{ margin: "24px 0" }}>
      {header}
      {totalLine}
      {bars}
    </div>
  );
}
