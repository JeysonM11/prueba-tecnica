import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import UserForm from "./components/UserForm";
import UsersTable from "./components/UsersTable";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/api/users");
      setUsers(res.data);
    } catch (error) {
      setMessage({ type: "error", text: "Error al cargar usuarios" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Gestión de Usuarios
      </Typography>

      <UserForm fetchUsers={fetchUsers} setMessage={setMessage} />

      {loading ? (
        <CircularProgress />
      ) : (
        <UsersTable
          users={users}
          fetchUsers={fetchUsers}
          setMessage={setMessage}
        />
      )}

      <Snackbar
        open={!!message}
        autoHideDuration={3000}
        onClose={() => setMessage(null)}
      >
        <Alert severity={message?.type}>{message?.text}</Alert>
      </Snackbar>
    </Container>
  );
}

export default App;