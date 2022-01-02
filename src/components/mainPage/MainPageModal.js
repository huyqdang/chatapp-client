import React, { useState } from "react";
import { usePageModal } from "./usePageModal";
import { Modal, Button, Input } from "antd";
import {
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";

function MainPageModal(props) {
  const { show } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const {
    modalMode,
    setModalMode,
    handleLoginUser,
    handleCreateUser,
    handleNoUser,
  } = usePageModal(props);

  const buttonsSet = () => {
    const loginButtons = [
      <Button key="1" type="text" onClick={() => setModalMode("no-user")}>
        Continue as a guest
      </Button>,
      <Button key="2" onClick={() => setModalMode("create")}>
        Create an account
      </Button>,
      <Button key="3" type="primary" onClick={handleLoginUser}>
        Login
      </Button>,
    ];

    const createButtons = [
      <Button key="1" onClick={() => setModalMode("login")}>
        Cancel
      </Button>,
      <Button key="2" type="primary" onClick={handleCreateUser}>
        Create Account
      </Button>,
    ];

    const noUserButtons = [
      <Button key="1" onClick={() => setModalMode("login")}>
        Cancel
      </Button>,
      <Button key="2" type="primary" onClick={() => handleNoUser(name)}>
        Submit Name
      </Button>,
    ];

    switch (modalMode) {
      case "login":
        return loginButtons;
      case "create":
        return createButtons;
      case "no-user":
        return noUserButtons;
      default:
        return loginButtons;
    }
  };

  return (
    <Modal visible={show} closable={false} footer={buttonsSet()}>
      {modalMode === "create" && (
        <Input
          size="large"
          placeholder="Name"
          prefix={<UserOutlined />}
          style={{ marginBottom: 10 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      {(modalMode === "create" || modalMode === "login") && (
        <>
          <Input
            size="large"
            placeholder="Email"
            prefix={<MailOutlined />}
            style={{ marginBottom: 10 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<KeyOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>
      )}
      {modalMode === "no-user" && (
        <Input
          size="large"
          placeholder="Name"
          prefix={<UserOutlined />}
          style={{ marginBottom: 10 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
    </Modal>
  );
}

export default MainPageModal;
