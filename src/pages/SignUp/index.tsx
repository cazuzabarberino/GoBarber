import React, { useCallback, useRef } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Bakcground, AnimationContainer } from "./styles";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { useToast } from "../../hooks/Toast";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export default () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        await api.post("/users", data);

        history.push("/");

        addToast({
          type: "success",
          title: "Cadastro Realizado",
          description: "Você já pode fazer o seu logon",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Erro no cadastro",
          description: "Ocorreu um erro ao fazer cadastro, tente novamente.",
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Bakcground />
      <Content>
        <AnimationContainer>
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

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
