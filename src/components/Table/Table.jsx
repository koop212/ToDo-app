import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
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
    
    render() {
        return(
            <div>
                <Table className={this.props.classes.taskTable}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tasks</TableCell>
                            <TableCell>Due Date</TableCell>
                            <TableCell>Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.tasksReducer.map((tasks, i) => {
                            return <TableRow key={i}>
                                        <TableCell>{tasks.tasks}</TableCell>
                                        <TableCell><Moment format='MM/DD/YY'>{tasks.due_date}</Moment></TableCell>
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