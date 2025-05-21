import './DataStatistics.css';
import DataBox from '../components/DataBox';
import Graph from '../components/Graph';
import useDataBox from '../hooks/useDataBox';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './DataStatistics.css';

const DataStatistics = () => {
  const temp = useDataBox('');
  const hum = useDataBox('');
  const co2 = useDataBox('');
  const solar = useDataBox('');

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content-layout" style={{ overflowY: 'auto' }}>
          <div className="dataBoxGrid">
            <DataBox
              title="온도°C"
              average={temp.average}
              highest={temp.highest}
              lowest={temp.lowest}
            >
              <Graph
                data={temp.data}
                title="온도°C"
                label="온도"
                color="#87ceeB"
              />
            </DataBox>
            <DataBox
              title="습도 %"
              average={hum.average}
              highest={hum.highest}
              lowest={hum.lowest}
            >
              <Graph
                data={hum.data}
                title="습도 %"
                label="습도"
                color="#87ceeB"
              />
            </DataBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStatistics;
