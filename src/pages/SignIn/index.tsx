import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Bakcground } from "./styles";
import { FiLogIn } from "react-icons/fi";

export default () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>

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
