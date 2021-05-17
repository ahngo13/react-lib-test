import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import WordCloud from './WordCloud';
import WordCloudD3 from './WordCloudD3';
import WordCloudReactD3 from './WordCloudReactD3';

function App() {
  const data = [
    {name: '01', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '02', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '03', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '04', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '05', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '06', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '07', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '08', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '09', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '10', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '11', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '12', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '13', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '14', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '15', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '16', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '17', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '18', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '19', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '20', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '21', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '22', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '23', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
    {name: '24', c1: 0, c2: 10, c3: 20, c4: 30, c5: 40, c6: 50, c7: 60, c8: 70, c9: 80, c10: 90},
  ];
  const data2 = [{name: 'Page A', uv: 0, pv: 100, amt: 2400}, {name: 'Page B', uv: 200, pv: 210, amt: 2400}, {name: 'Page C', uv: 300, pv: 210, amt: 2400}];
  return (
    <div className="App">
      <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line dataKey="c1" stroke="#8884d8" />
        <Line dataKey="c2" stroke="#ff00ff" />
        <Line dataKey="c3" stroke="#ff0000" />
        <Line dataKey="c4" stroke="#00ffff" />
        <Line dataKey="c5" stroke="#0000ff" />
        <Line dataKey="c6" stroke="#8884d8" />
        <Line dataKey="c7" stroke="#8884d8" />
        <Line dataKey="c8" stroke="#8884d8" />
        <Line dataKey="c9" stroke="#8884d8" />
        <Line dataKey="c10" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
      </LineChart>

      <AreaChart
        data={data2}
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
      <WordCloud/>
      <WordCloudD3/>
      <WordCloudReactD3/>
    </div>
  );
}

export default App;