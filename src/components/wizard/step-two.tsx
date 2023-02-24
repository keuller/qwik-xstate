import { component$ } from "@builder.io/qwik";

export type StepProps = {
    state: any,
    active: boolean
}

export default component$((props: StepProps) => {
    return (
        <div class={`flex-col gap-3 ${props.active ? '' : 'hide'}`}>
            <h1>Step 2</h1>

            <div class="flex-col">
                <label for="">Country</label>
                <input type="text" name="country" maxLength={30} 
                    onInput$={(ev) => props.state.data.country = (ev.target as HTMLInputElement).value} />
            </div>

            <div class="flex-col">
                <label for="">City</label>
                <input type="text" name="city" maxLength={30} 
                    onInput$={(ev) => props.state.data.city = (ev.target as HTMLInputElement).value} />
            </div>
        </div>
    )
});