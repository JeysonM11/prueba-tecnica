const users = require("../data/users");

//obtener usuarios
const getUsers = (req, res) => {
  res.json(users);
};

//crar usuario
const createUser = (req, res) => {
    const {nombre, documento, cargo} = req.body;
    if (!nombre || !documento || !cargo) {
        return res.status(400).json({ error: 'Todos los campos obligatorios' });
    }

    const existingUser = users.find(u => u.documento === documento);
    if (existingUser) {
        return res.status(400).json({ error: 'El documento ya existe' });
    }

    const newUser = {nombre, documento, cargo};
    users.push(newUser);

    res.status(201).json(newUser);

};

//eliminar usuario
const deleteUser = (req, res) => {
  const { documento } = req.params;

  const index = users.findIndex(u => u.documento === documento);

  if (index === -1) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  users.splice(index, 1);

  res.json({ message: "Usuario eliminado correctamente" });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser
};