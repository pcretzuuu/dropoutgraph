import './App.css';
import React from 'react';
import BarChart from "./components/BarChart/BarChart";

const mockData = {
  "node1": {
    label: "Contact Info",
    value: 100,
    type: "BASIC",
    adjList: ["node2"]
  },
  "node2": {
    label: "NemID",
    value: 95,
    type: "SERVICE",
    adjList: ["node3", "nodeBranch2", "nodeBranch4"]
  },
  "node3": {
    label: "Personal Address",
    value: 95,
    type: "BASIC",
    adjList: []
  },
  "nodeBranch2":  {
    label: "Branch 2",
    value: 55,
    type: "BASIC",
    adjList: ["nodeBranch3"]
  },
  "nodeBranch3": {
    label: "Branch 3",
    value: 25,
    type: "BASIC",
    adjList: []
  },
  "nodeBranch4": {
    label: "Personal address",
    value: 60,
    type: "BASIC",
    adjList: ["nodeBranch5"]
  },
  "nodeBranch5": {
    label: "Financial info",
    value: 43,
    type: "BASIC",
    adjList: ["nodeBranch6"]
  },
  "nodeBranch6": {
    label: "Documents",
    value: 20,
    type: "BASIC",
    adjList: ["nodeBranch7"]
  },
  "nodeBranch7": {
    label: "Terms and Conditions",
    value: 11,
    type: "BASIC",
    adjList: ["nodeBranch8"]
  },
  "nodeBranch8": {
    label: "Longest one",
    value: 7,
    type: "BASIC",
    adjList: []
  }
};

function App() {
  return (
      <div className="App">
        <div className="App-body">
          <BarChart nodes={mockData}/>
        </div>
      </div>
  );
}

export default App;
