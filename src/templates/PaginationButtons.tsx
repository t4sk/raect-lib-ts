import React from "react";
import { Button, Label } from "semantic-ui-react";
import styles from "./PaginationButtons.module.css";

interface Props {
  count: number;
  skip: number;
  limit: number;
  onChangePage: (params: { page: number; skip: number }) => any;
}

export const PaginationButtons: React.FC<Props> = (props) => {
  const { count, skip, limit, onChangePage } = props;

  const current = Math.floor(skip / limit) + 1;
  const total = Math.max(Math.ceil(count / limit), 1);

  function onClick(page: number) {
    onChangePage({
      page,
      skip: (page - 1) * limit,
    });
  }

  return (
    <div className={styles.component}>
      <Button
        size="mini"
        basic
        disabled={current === 1}
        onClick={() => onClick(1)}
      >
        First
      </Button>

      <Button
        data-testid="prev"
        size="mini"
        basic
        disabled={current === 1}
        icon="chevron left"
        onClick={() => onClick(current - 1)}
      />

      <Label basic>
        <div>
          {(skip + 1).toLocaleString()}-
          {Math.min(skip + limit, count).toLocaleString()} of{" "}
          {count.toLocaleString()}
        </div>
      </Label>

      <Button
        data-testid="next"
        size="mini"
        basic
        disabled={current === total}
        icon="chevron right"
        onClick={() => onClick(current + 1)}
      />
      <Button
        size="mini"
        basic
        disabled={current === total}
        onClick={() => onClick(total)}
      >
        Last
      </Button>
    </div>
  );
};

export default PaginationButtons;
