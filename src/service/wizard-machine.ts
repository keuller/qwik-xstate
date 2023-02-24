import { createMachine } from '@xstate/fsm';
import type { WizardState, WizardEvent } from './types';

export const wizardMachine = createMachine<WizardState, WizardEvent, any>({
    id: 'demo',
    initial: 'step1',
    context: {
        option: '1',
        value: 0,

        name: '',
        email: '',
        
        country: '',
        city: ''
    },
    states: {
        step1: {
            on: {
                NEXT: { 
                    target: 'step2'
                }
            }
        },
        step2: {
            on: {
                PREV: { target: 'step1' },
                NEXT: { target: 'step3' }
            }
        },
        step3: {
            on: {
                PREV: { target: 'step2' }
            }
        }
    }
});