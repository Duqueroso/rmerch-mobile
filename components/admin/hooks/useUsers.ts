import { useState } from "react";

const USERS = [
  {
    id: 1,
    name: "Pablo Jimora",
    email: "pablo@riwi.com",
    role: "Usuario",
    avatar: "P",
  },
  {
    id: 2,
    name: "Duque",
    email: "duque@riwi.com",
    role: "Administrador",
    avatar: "D",
  },
];

const useUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.role.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const total = USERS.length;
  const admins = USERS.filter((u) => u.role === "Administrador").length;
  const sellers = USERS.filter((u) => u.role === "Vendedor").length;

  return {
    USERS,
    searchQuery,
    setSearchQuery,
    filteredUsers,
    total,
    admins,
    sellers
  };
};

export default useUsers;
