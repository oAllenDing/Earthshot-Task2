import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, Container, Grid, Box, Typography } from '@mui/material'


const content = [
  {
    color: "#71B0EF",
    boxNumber: "1",
    titleText: "40m in Ethiopia.",
    description: " Causing XX deaths, YY reduction in QALY's, ZZ $ cost.",
    barColor: "#6AA121",
    barOneColor: "#6AA121",
    barTwoColor: "#6AA121",
    barDesc: "HIGH",
    barOneDesc: "HIGH",
    barTwoDesc: "HIGH",
  },
  {
    color: "#71B0EF",
    boxNumber: "2",
    titleText: "32m in Afghanistan.",
    description: " Causing XX deaths, YY reduction in QALY's, ZZ $ cost.",
    barColor: "#D2BD0A",
    barOneColor: "#D2BD0A",
    barTwoColor: "#6AA121",
    barDesc: "MED SOLVABILITY",
    barOneDesc: "MED OPPORTUNITY",
    barTwoDesc: "HIGH IMPACT",
  },
  {
    color: "#71B0EF",
    boxNumber: "3",
    titleText: "163m in India.",
    description: " Causing XX deaths, YY reduction in QALY's, ZZ $ cost.",
    barColor: "#6AA121",
    barOneColor: "#6AA121",
    barTwoColor: "#6AA121",
    barDesc: "HIGH",
    barOneDesc: "HIGH",
    barTwoDesc: "HIGH",
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{
    backgroundColor: "#1d1d1d",
    height: "95vh",
    width: "95vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    color: "white",
    padding: "8px",
  }}
  >
    <div
      style={{
        width: "25%",
        padding: "8px",
        borderRadius: "12px",
        backgroundColor: "#71B0EF",
      }}
    >
      <div>Forest & Umbrella #1</div>
      <Typography variant="h6">Bad water & sanitation.</Typography>
      <div style={{ marginBottom: "8px" }}>Globally, 1 in 3 ≠ safe drinking water, mostly ≠ LDC's.</div>
      <div style={{ marginBottom: "8px" }}>Inaction cost: &#123;xx&#125;, &#123;yy&#125; QALY's, &#123;zz&#125; monetary.</div>
      <div style={{ marginBottom: "8px" }}>Cost to solve problem now: &#123;xx&#125; people, &#123;yy&#125; investment, &#123;zz&#125; opportunity cost v. others.</div>
      <div style={{ marginBottom: "8px" }}>Opportunity for innovation: Reduce cost by &#123;xx%&#125; by fixing &#123;1, 2, 3&#125;, improving ROI by &#123;yy&#125; per $ + hr spent.</div>
      <div style={{ marginBottom: "8px" }}>Gap: Technologies & operation risk. High CapEx.</div>
      <div
        style={{
          borderRadius: "12px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "18px",
              width: "100px",
              backgroundColor: "#6AA121",
              borderRadius: "15%",
              marginRight: "8px",
            }}
          >HIGH...</div>
          <div
            style={{
              height: "18px",
              width: "100px",
              backgroundColor: "#6AA121",
              borderRadius: "15%",
              marginRight: "8px",
            }}
          >HIGH...</div>
          <div
            style={{
              height: "18px",
              width: "100px",
              backgroundColor: "#6AA121",
              borderRadius: "15%",
              marginRight: "8px",
            }}
          >HIGH...</div>
        </div>
      </div>
    </div>
    <div
      style={{
        width: "25%",
        padding: "8px",
        borderRadius: "12px",
        backgroundColor: "#1B4D80",
      }}
    >
      <Typography variant="h6" display="flex" justifyContent="center">By Country.</Typography>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {content.map((item) => (
        <div
          style={{
            backgroundColor: item.color,
            width: "25%",
            padding: "8px",
            borderRadius: "12px",
          }}
        >
          <div style={{ marginBottom: "8px" }}> Tree 1.{item.boxNumber} & Umbrella 1.{item.boxNumber}</div>
          <Typography variant="h6">{item.titleText}</Typography>
          <div style={{ marginBottom: "8px" }}>{item.description}</div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            width: "85%",
            padding: "8px",
            borderRadius: "10px",
            backgroundColor: "#1d1d1d",
          }}
          >
            problem profile.
          </div>

          <div style={{ display: "flex", padding: "8px", }}>
            <div
              style={{
                height: "18px",
                width: "100px",
                backgroundColor: item.barColor,
                borderRadius: "15%",
                marginRight: "8px",
              }}
            >{item.barDesc}</div>
            <div
              style={{
                height: "18px",
                width: "100px",
                backgroundColor: item.barOneColor,
                borderRadius: "15%",
                marginRight: "8px",
              }}
            >{item.barOneDesc}</div>
            <div
              style={{
                height: "18px",
                width: "100px",
                backgroundColor: item.barTwoColor,
                borderRadius: "15%",
                marginRight: "8px",
              }}
            >{item.barTwoDesc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

