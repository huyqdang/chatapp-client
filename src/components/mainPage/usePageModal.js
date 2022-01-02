import { useState, useContext } from "react";
import { Modal } from "antd";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext";

export function usePageModal({ updateModalShow }) {
  const [modalMode, setModalMode] = useState("login");
  const { updateUser, updateToken } = useContext(GlobalContext);

  const handleNoUser = (name) => {
    updateUser({ name });
    updateModalShow(false);
  };

  const handleCreateUser = ({ name, email, password }) => {
    axios
      .post("http://localhost:8080/user/create", { name, email, password })
      .then(() => {
        Modal.success({
          content: "your account has been created",
        });
        setModalMode("login");
        updateModalShow(false);
      })
      .catch(() => {
        Modal.error({
          title: "Something wrong",
          content: "Please try again later",
        });
      });
  };

  const handleLoginUser = ({ email, password }) => {
    axios
      .post("http://localhost:8080/user/login", { email, password })
      .then((response) => {
        updateUser(response.data.user);
        updateToken(response.data.token);
        updateModalShow(false);
      })
      .catch(() => {
        Modal.error({
          title: "Something wrong",
          content: "Please try again later",
        });
      });
  };

  return {
    modalMode,
    handleCreateUser,
    handleLoginUser,
    setModalMode,
    handleNoUser,
  };
}
