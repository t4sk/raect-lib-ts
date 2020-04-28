import React from "react";
import { Message, Button } from "semantic-ui-react";

interface ErrorProps {
  error: string;
  onClickRetry: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

interface Props extends ErrorProps {
  loading: boolean;
  children: () => React.ReactNode;
  renderLoading?: () => React.ReactNode;
  renderError?: (props: ErrorProps) => React.ReactNode;
}

function renderDefaultLoader() {
  return <div>Loading...</div>;
}

const renderDefaultError: React.FC<ErrorProps> = ({ error, onClickRetry }) => {
  return (
    <Message negative>
      <p>{error}</p>
      <Button onClick={(e) => onClickRetry(e)}>Retry</Button>
    </Message>
  );
};

export const Loading: React.FC<Props> = ({
  loading,
  error,
  onClickRetry,
  renderLoading = renderDefaultLoader,
  renderError = renderDefaultError,
  children,
}) => {
  // NOTE: wrap in React fragment to remove ts errors
  if (loading) {
    return <>{renderLoading()}</>;
  }

  if (error) {
    return <>{renderError({ error, onClickRetry })}</>;
  }

  return <>{children()}</>;
};

export default Loading;
