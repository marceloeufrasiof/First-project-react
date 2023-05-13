import React, { useState, useEffect } from "react";
import Avatar from "../../Assets/avatar.svg";
import Arrow from "../../Assets/arrow.svg";
import Trash from "../../Assets/trash.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data: newUsers } = await axios.get(
          "http://localhost:3001/users"
        );
        setUsers(newUsers);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [users]);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1> Usuários </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                {" "}
                <img src={Trash} alt="lata-de-lixo" />{" "}
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          {" "}
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
