import { useState } from "react";

interface State<Data> {
  nonce: number;
  pending: boolean;
  error: Error | null;
  data: Data | null;
}

interface Response<Data> {
  data?: Data;
  error?: Error;
}

interface UseAsync<Params, Data> extends State<Data> {
  run: (params: Params) => Promise<Response<Data>>;
  reset: () => void;
}

function useAsync<Params, Data>(
  req: (params: Params) => Promise<Data>
): UseAsync<Params, Data> {
  const INITIAL_STATE: State<Data> = {
    nonce: 0,
    pending: false,
    error: null,
    data: null,
  };

  const [state, setState] = useState<State<Data>>(INITIAL_STATE);

  async function run(params: Params): Promise<Response<Data>> {
    setState((state) => ({
      ...state,
      nonce: state.nonce + 1,
      pending: true,
      data: null,
      error: null,
    }));

    try {
      const data = await req(params);

      setState((state) => ({
        ...state,
        pending: false,
        data,
      }));

      return { data };
    } catch (error) {
      setState((state) => ({
        ...state,
        pending: false,
        error,
      }));

      return { error };
    }
  }

  function reset() {
    setState(INITIAL_STATE);
  }

  return {
    ...state,
    run,
    reset,
  };
}

export default useAsync;
