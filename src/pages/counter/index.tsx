import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  changeAmmountAsync,
  countSelectorState,
  decrementByAmount,
} from '@redux/counter';

import { StyledSection } from './styled';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(countSelectorState);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <StyledSection>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {count.value}
      </h2>
      <h2>
        The current status is
        {count.status}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
        <button
          onClick={() => dispatch(changeAmmountAsync(Number(incrementAmount)))}
        >
          Increment by amount async
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </StyledSection>
  );
}
