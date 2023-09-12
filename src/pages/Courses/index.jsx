import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Header from '../Sidebar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Api from '../../helpers/ApiHandler';
import ApiPath from '../../helpers/ApiConstant';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IconButton } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'createdAt', label: 'Created Date', minWidth: 100 },
  {
    id: 'action',
    label: 'Actions',
    minWidth: 100,
    align: 'right',
  },
];

function createData(name, createdAt) {
  return { name, createdAt };
}

const rows = [];

export default function Courses() {
  const [actualRows, setRows] = React.useState(rows);

  const api = new Api();

  useEffect(() => {
    console.log('Called');
    api
      .get(ApiPath.GET_COURSE, null)
      .then((data) => {
        const courses = data.result;
        const newRows = courses.map((ele) =>
          createData(ele.name, ele.createdAt)
        );
        setRows(newRows);
      })
      .catch((err) => {
        console.log('errr ', err);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex', marginTop: 10 }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 1 }}>
          <Typography color="text.primary" sx={{ fontWeight: 'bold' }}>
            Courses
          </Typography>
        </Breadcrumbs>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {actualRows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        if (column.id == 'action') {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <IconButton
                                onClick={() => {}}
                                color="primary"
                                aria-label="Edit"
                              >
                                <ModeEditIcon />
                              </IconButton>
                            </TableCell>
                          );
                        }

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
