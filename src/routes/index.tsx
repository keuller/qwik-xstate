import { $, component$, useBrowserVisibleTask$, useStore, noSerialize, type NoSerialize } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { interpret, type StateMachine } from '@xstate/fsm';

import { wizardMachine } from '~/service/wizard-machine';
import type { WizardState, WizardEvent } from '~/service/types';

import StepOne from '~/components/wizard/step-one';
import StepThree from '~/components/wizard/step-three';
import StepTwo from '~/components/wizard/step-two';

export default component$(() => {
  const state = useStore<{
    currentState: string,
    wizard: NoSerialize<StateMachine.Service<WizardState, WizardEvent, any>>,
    data: WizardState
  }>({
    currentState: 'step1',
    wizard: undefined,
    data: { option: '', name: '', value:0, email: '', country: '', city: '' }
  });

  const doNext = $(() => {
    state.wizard?.send({ type: 'NEXT' });
  });

  const doPrev = $(() => {
    state.wizard?.send({ type: 'PREV' });
  });

  const doSend = $(() => {
    console.log('data', state.data);
  });

  useBrowserVisibleTask$(() => {
    state.wizard = noSerialize(interpret(wizardMachine).start());
    state.wizard?.subscribe((value) => {
      state.currentState = value.value;
      state.data = value.context;
    });
  });

  return (
    <div>
      <form>
        <StepOne state={state} active={state.currentState === 'step1'} />

        <StepTwo state={state} active={state.currentState === 'step2'} />

        <StepThree state={state} active={state.currentState === 'step3'} />

        <div class="button-group">
          <button type="button" class="btn" 
            onClick$={() => doPrev()} disabled={state.currentState === 'step1'}>Previous</button>

          {state.currentState !== 'step3' && <button type="button" class="btn" onClick$={() => doNext()}>Next</button>}

          {state.currentState === 'step3' && <button type="button" class="btn" onClick$={() => doSend()}>Send</button>}
        </div>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik + xstate',
  meta: [
    {
      name: 'description',
      content: 'Qwik xstate demo',
    },
  ],
};
