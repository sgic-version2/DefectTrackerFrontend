import React from "react";
import { withStyles, makeStyles, fade } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import Switch from "@material-ui/core/Switch";
import Container from "@material-ui/core/Container";
import { InputBase, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Segment } from "semantic-ui-react";
import Breadcrumbs from '../../../components/breadCrumbs/breadCrumbs'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(privileges, dev) {
  return { privileges, dev };
}

const rows = [
  createData("Edit Defect"),
  createData("Manage Defect"),
  createData("Defect Dashboard"),
  createData("Add Module"),
  createData("Edit Module"),
  createData("Manage Module"),
  createData("Add SubModule"),
  createData("Edit SubModule"),
  createData("Manage Module"),
  createData("Developer Dashboard"),
  createData("Developer Privilage")
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  textField: {
    marginRight: theme.spacing(3),
    width: "250px"
  },
  table: {
    minWidth: 700
  },
  button: {
    marginTop: theme.spacing(2)

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
}));

export default function TechLeadPrivileges() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Grid direction="row" container>
        <Grid item xs={11} style={{ marginTop: '2%' }}>
          <Segment>
            <Breadcrumbs />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <searchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Container className={classes.container}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell >Privileges</StyledTableCell>
                      <StyledTableCell align="right">Developer</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map(row => (
                        <TableRow key={row.privileges}>
                          <TableCell>{row.privileges}</TableCell>
                          <TableCell align="right">
                            <Switch color="primary" />
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <div>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                      "aria-label": "previous page"
                    }}
                    nextIconButtonProps={{
                      "aria-label": "next page"
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </div>
              </Paper>
            </Container>
          </Segment>
        </Grid>
      </Grid>
    </div>
  );
}
