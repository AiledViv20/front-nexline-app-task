import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import styled from './Dashboard.module.scss';

import { dataDummy } from '../../resources';

const Dashboard = () => {

    const createNewTask = () => {

    }

    return ( 
        <div className={styled.container_dashboard}>
            <div className={styled.col_1}>
                <Sidebar />
            </div>
            <div className={styled.col_2}>
                <Navbar 
                    name={"Ailed Vivanco"}
                    email={"ailedviv20@hotmail.com"} />
                <div className={styled.secc_task}>
                    <div className={styled.btn_create_task}>
                        <Button 
                            action={createNewTask}
                            text={"Nueva tarea"}
                            />
                    </div>
                </div>
                <div className={styled.data_table}>
                    <table>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Estatus de compleción</th>
                            <th>Fecha de entrega</th>
                            <th>Comentarios</th>
                            <th>Creado por</th>
                            <th>Tags</th>
                        </tr>
                        {dataDummy && dataDummy.map((element, idx) => (
                            <tr key={idx}>
                                <td>{element.title}</td>
                                <td>{element.description}</td>
                                <td>{element.status}</td>
                                <td>{element.deadline}</td>
                                <td>{element.comments}</td>
                                <td>{element.created_by}</td>
                                <td>{element.tags}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;
