import React from "react";
import { Container, Toast } from "./styles";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

export default () => {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button>
          <FiXCircle />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button>
          <FiXCircle />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button>
          <FiXCircle />
        </button>
      </Toast>
    </Container>
  );
};
