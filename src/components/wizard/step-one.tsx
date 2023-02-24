import { component$ } from "@builder.io/qwik";

export type StepProps = {
    state: any,
    active: boolean
}

export default component$((props: StepProps) => {
    return (
        <div class={`flex-col gap-3 ${props.active ? '' : 'hide'}`}>
            <h1>Step 1</h1>

            <div class="flex-col">
                <label for="">Type</label>
                <select name="type" onChange$={(ev) => props.state.data.option = ev.target.value}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>

            <div class="flex-col">
                <label for="">Value</label>
                <input type="text" name="value" maxLength={12} 
                    onInput$={(ev) => props.state.data.value = Number((ev.target as HTMLInputElement).value) } />
            </div>
        </div>
    )
});