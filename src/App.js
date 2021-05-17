import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

function App() {
  const data = [{name: 'Page A', uv: 0, pv: 100, amt: 2400}, {name: 'Page B', uv: 200, pv: 210, amt: 2400}, {name: 'Page C', uv: 300, pv: 210, amt: 2400}];
  return (
    <div className="App">
      <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line dataKey="uv" stroke="#8884d8" />
        <Line dataKey="pv" stroke="#ff0000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
      </LineChart>

      <AreaChart
        data={data}
        width={400} height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}

export default App;