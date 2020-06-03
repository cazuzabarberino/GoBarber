import React, { useCallback, useRef } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Bakcground } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

export default () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "No mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Bakcground />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

        <a href="">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
