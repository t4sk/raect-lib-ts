import { useState } from "react";

interface State<Response> {
  nonce: number;
  pending: boolean;
  error: Error | null;
  data: Response | null;
}

interface Run<Response> {
  data?: Response;
  error?: Error;
}

interface UseAsync<Params, Response> extends State<Response> {
  run: (params: Params) => Promise<Run<Response>>;
  reset: () => void;
}

function useAsync<Params, Response>(
  req: (params: Params) => Promise<Response>
): UseAsync<Params, Response> {
  const INITIAL_STATE: State<Response> = {
    nonce: 0,
    pending: false,
    error: null,
    data: null,
  };

  const [state, setState] = useState<State<Response>>(INITIAL_STATE);

  async function run(params: Params): Promise<Run<Response>> {
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
