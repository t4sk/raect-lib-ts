import React, {
  useReducer,
  createContext,
  useEffect,
  useRef,
  useContext,
} from "react";

interface State {
  width: number;
  height: number;
}

const INITIAL_STATE: State = {
  width: 0,
  height: 0,
};

const UPDATE_SIZE = "UPDATE_SIZE";

interface UpdateSize {
  type: "UPDATE_SIZE";
  width: number;
  height: number;
}

type Action = UpdateSize;

function reducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case UPDATE_SIZE:
      return {
        ...state,
        width: action.width,
        height: action.height,
      };
    default:
      return state;
  }
}

const DivSizeContext = createContext(INITIAL_STATE);

export function useDivSizeContext() {
  return useContext(DivSizeContext);
}

interface Props {}

export const Provider: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  function update() {
    if (!ref.current) {
      return;
    }

    dispatch({
      type: UPDATE_SIZE,
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  }

  return (
    <div ref={ref}>
      <DivSizeContext.Provider value={state}>
        {children}
      </DivSizeContext.Provider>
    </div>
  );
};
