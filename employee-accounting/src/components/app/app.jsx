import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeeList from '../employee-list/employee-list'



import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Oleg S.', salary: '800', increase: false, key: 1},
    {name: 'Win Diesel', salary: '2000', increase: true, key: 2},
    {name: 'Michail K', salary: '1850', increase: false, key: 3}
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeeList data = {data}/>
        <EmployeeAddForm/>
    </div>
  );
}

export default App;