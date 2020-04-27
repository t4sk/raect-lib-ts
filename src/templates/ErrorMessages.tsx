import React from "react";
import { Transition, Message } from "semantic-ui-react";

interface Props {
  errors: string[];
}

export const ErrorMessages: React.FC<Props> = ({ errors }) => {
  return (
    <Transition
      visible={errors.length > 0}
      animation="fade down"
      duration={500}
    >
      {errors.length === 1 ? (
        <Message error={true}>{errors[0]}</Message>
      ) : (
        <Message error={true} list={errors} />
      )}
    </Transition>
  );
};

export default ErrorMessages;
