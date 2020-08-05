import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableRowColumn from "@material-ui/core/Table";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const row = (x, i, header) =>
  <TableRow key={{i}}>
    {header.map((y, k) =>
      <TableRowColumn key={k}>
        {x[y.prop]}
      </TableRowColumn>
    )}
  </TableRow>;





export default ({data, header}) =>
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              header.map((x,i) =>
              <StyledTableCell  key={i}>{x.name}</StyledTableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
         {data.map((x, i) => row(x, i, header))}
        </TableBody>
      </Table>
    </TableContainer>
  

