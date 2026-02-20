import { useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper
} from "@mui/material";

function UsersTable({ users, fetchUsers, setMessage }) {
  const [deletingDoc, setDeletingDoc] = useState(null);

  const handleDelete = async (documento) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este usuario?");

    if (!confirmDelete) return;

    try {
      setDeletingDoc(documento);
      await axios.delete(`http://localhost:3001/api/users/${documento}`);

      setMessage({ type: "success", text: "Usuario eliminado correctamente" });

      fetchUsers();
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error al eliminar usuario"
      });
    } finally {
      setDeletingDoc(null);
    }
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Documento</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No hay usuarios registrados
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.documento}>
                <TableCell>{user.nombre}</TableCell>
                <TableCell>{user.documento}</TableCell>
                <TableCell>{user.cargo}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(user.documento)}
                    disabled={deletingDoc === user.documento}
                  >
                    {deletingDoc === user.documento ? "Eliminando..." : "Eliminar"}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UsersTable;