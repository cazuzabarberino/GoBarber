import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import * as Yup from "yup";
import logoImg from "../../assets/logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/AuthContext";
import getValidationErrors from "../../utils/getValidationErrors";
import { Bakcground, Container, Content } from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

export default () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Email obrigatório")
            .email("Digite um email válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Bakcground />
    </Container>
  );
};
