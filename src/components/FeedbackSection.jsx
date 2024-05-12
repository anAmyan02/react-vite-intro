import { useState, useRef } from 'react'
import Button from './Button/Button'


function StateVsRef(){
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if(event.key === 'Enter'){
            setShow(true)
        } 
        // console.log(input.current.value);
    }

    return(
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input 
                ref = {input}
                type="text" 
                onKeyDown={handleKeyDown}
                className='control' 
            />
        </div>
    )
}


export default function FeedbackSection(){

    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason : 'help'
    })

    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('help')
    // const [hasError, setHasError] = useState(false)

    const handleNameChange = (event) =>{

        setForm(prev => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim() === 0,
        }))
    }

    // function toggleError(){
    //     setHasError((prev) => !prev)
    //     // setHasError((prev) => !prev)
    // }

    // function toggleError(){
    //     setHasError((prev) => !prev)
    // }
    
    return (
        <section>
            <h3>feedback section</h3>

            {/* <Button onClick = {toggleError}>toggle error</Button>    */}

            <form action="">
                <label htmlFor="name">your name</label>
                <input 
                    type="text" 
                    id="name" 
                    className="control"  
                    value={form.name} 
                    style={{
                        border: form.hasError ?  '1px red solid' :  null
                    }}
                    onChange={handleNameChange}
                    />

                <label htmlFor="reason">reason</label>
                <select name="reason" id="reason" className="control" value={form.reason} onChange={(event) => setForm((prev) => ({...prev, reason: event.target.value}))}>
                    <option value="error">error</option>
                    <option value="help">help</option>
                    <option value="suggest">suggest</option>

                </select>

                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>

                <Button disabled = {form.hasError} isActive={!form.hasError}>send</Button>

                <hr />

                <StateVsRef/>
            </form>
        </section>
    )
}