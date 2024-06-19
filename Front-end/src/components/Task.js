import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Task.css';

const TaskTable = ({ tasks, onDelete }) => {
    return (
        <TableContainer component={Paper} className="task-table">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Task</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.id.toString()}</TableCell>
                            <TableCell>{task.taskText}</TableCell>
                            <TableCell>
                                <DeleteIcon fontSize="large" style={{ opacity: 0.7, cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TaskTable;
