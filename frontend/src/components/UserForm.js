import { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Paper
} from "@mui/material";

function UserForm({ fetchUsers, setMessage }) {
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    cargo: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "documento" && value !== "" && !/^\d+$/.test(value)) {
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre, documento, cargo } = formData;

    if (!nombre || !documento || !cargo) {
      setMessage({ type: "error", text: "Todos los campos son obligatorios" });
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:3001/api/users", formData);

      setMessage({ type: "success", text: "Usuario creado correctamente" });

      setFormData({
        nombre: "",
        documento: "",
        cargo: ""
      });

      fetchUsers();
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Error al crear usuario"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ padding: 3, marginBottom: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
      >
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Documento"
          name="documento"
          value={formData.documento}
          onChange={handleChange}
          fullWidth
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />

        <TextField
          label="Cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar"}
        </Button>
      </Box>
    </Paper>
  );
}

export default UserForm;