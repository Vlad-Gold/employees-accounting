import EmployeesListItem from "../employee-list-item/employee-list-item";
import './emloyee-list.css';


const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; // частичная деструктуризация (по остаточному принципу)

        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
          {elements}
        </ul>
    )
}

export default EmployeesList;