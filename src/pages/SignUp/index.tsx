import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Bakcground } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default () => {
  return (
    <Container>
      <Bakcground />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu Cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Name" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
