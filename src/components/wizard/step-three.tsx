import { component$ } from "@builder.io/qwik";

export type StepProps = {
    state: any,
    active: boolean
}

export default component$((props: StepProps) => {
    return (
        <div class={`flex-col gap-3 ${props.active ? '' : 'hide'}`}>
            <h1>Step 3</h1>

            <div class="flex-col">
                <label for="">Name</label>
                <input type="text" name="name" maxLength={30} 
                    onInput$={(ev) => props.state.data.name = (ev.target as HTMLInputElement).value} />
            </div>

            <div class="flex-col">
                <label for="">E-mail</label>
                <input type="email" name="email" maxLength={70} 
                    onInput$={(ev) => props.state.data.email = (ev.target as HTMLInputElement).value} />
            </div>
        </div>
    )
});
