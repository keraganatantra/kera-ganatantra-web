import { useState } from "react";
import ScandalImpactChart from "./ScandalImpactChart";
import { scandals } from "./data/scandal";

export const ImpactSection = () => {
  const [selectedCase, setSelectedCase] = useState<
    (typeof scandals)[number] | null
  >(scandals[0]);
  return (
    <section className="impact-section" aria-labelledby="impactHeading">
      <h3 id="impactHeading">If Stolen Money Was Recovered…</h3>
      <p className="impact-intro">
        Select a recent corruption case to see what that amount could fund
        instead. Figures approximate Nepal Federal Budget 2025/26 (NPR).
      </p>
      <div className="impact-select-label" style={{ marginBottom: 8 }}>
        Select a case
      </div>
      <div
        id="scandalCards"
        className="scandal-cards"
        role="listbox"
        aria-label="Corruption cases"
      >
        {scandals.map((scandal) => (
          <button
            key={scandal.id}
            className={`scandal-card${
              selectedCase?.id === scandal.id ? " selected" : ""
            }${scandal.disabled ? " disabled" : ""}`}
            role="option"
            aria-selected={selectedCase?.id === scandal.id}
            aria-disabled={scandal.disabled ? "true" : "false"}
            onClick={() => !scandal.disabled && setSelectedCase(scandal)}
            style={{
              margin: "0 8px 8px 0",
              padding: "12px 18px",
              border:
                selectedCase?.id === scandal.id
                  ? "2px solid #ffe600"
                  : "1px solid #ccc",
              borderRadius: 8,
              background: scandal.disabled ? "#222" : "#18181b",
              color: scandal.disabled ? "#888" : "#fff",
              cursor: scandal.disabled ? "not-allowed" : "pointer",
              opacity: scandal.disabled ? 0.6 : 1,
            }}
            disabled={scandal.disabled}
            title={scandal.label}
          >
            {scandal.label}
          </button>
        ))}
      </div>
      <div
        className="impact-results"
        id="impactResults"
        role="group"
        aria-live="polite"
      >
        <ScandalImpactChart selectedCase={selectedCase} />
        {!selectedCase && (
          <div style={{ color: "#888" }}>Select a case to see impact.</div>
        )}
      </div>
      <p className="impact-disclaimer" role="note" style={{ marginTop: 12 }}>
        Disclaimer: These figures are simplified, approximate conversions using
        publicly reported amounts from news / online portals. They are for civic
        illustration only not audited financial statements. Please do your own
        research to verify exact losses and budget line items. Linked sources
        are provided for transparency.
      </p>
    </section>
  );
};
