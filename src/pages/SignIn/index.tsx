import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Bakcground } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu Logon</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Bakcground></Bakcground>
    </Container>
  );
};
