import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableHead, TableCell, TableRow, Button } from '@material-ui/core';
import Moment from 'react-moment';


const styles = {
    taskTable: {
        margin: '20px'
    }
}

class TasksTable extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TASKS'});
    }

    // deleteTask = (taskId) => {
    //     this.props.dispatch({ type: 'DELETE_TASK', payload: { id: taskId}});
    // }
    
    render() {
        return(
            <div>
                <Table className={this.props.classes.taskTable}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tasks</TableCell>
                            <TableCell>Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.tasksReducer.map((tasks, i) => {
                            return <TableRow key={i}>
                                        <TableCell>{tasks.tasks}</TableCell>
                                        {/* <TableCell><Button onClick={() => this.deleteTask(tasks.id)}>Delete</Button></TableCell> */}
                                   </TableRow>
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withStyles(styles)(connect(mapStateToProps)(TasksTable));