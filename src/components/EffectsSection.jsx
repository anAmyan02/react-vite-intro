import { useEffect, useState, useCallback } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import useInput from './hooks/useInput'

export default function EffectsSection(){

    const input = useInput()

    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])


    // ex. 1
    // async function fetchUsers() {
    //     setLoading(true)
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const users = await response.json()
    //     setUsers(users)
    //     setLoading(false)
    // }

    // useEffect(()=> {
    //     fetchUsers()
    // }, [])

    // ex. 2 +++
    // useEffect(()=> {

    //     async function fetchUsers() {
    //         setLoading(true)
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const users = await response.json()
    //         setUsers(users)
    //         setLoading(false)
    //     }

    //     fetchUsers()
    // }, [])

    // ex.3

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])


    useEffect(()=> {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>effects</h3>

            <Button onClick = {() => setModal(!modal)}>open info</Button>

            <Modal open = {modal}>
                <h3>hellow from modal</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos necessitatibus.
                     Dolor maxime architecto sapiente eaque aliquam modi numquam nobis?</p>

            <Button onClick = {() => setModal(false)}>close modal</Button>
            </Modal>

            {loading && <p>Loading ...</p>}
            {!loading && 
            
            <>
            <input type="text" 
            className='control'
            {...input}
            />
            {/* <h6>{input.value}</h6>   */}
             <ul>
                {/* {users.map(user => {
                    return <li key = {user.id}>{user.name}</li>
                }) } */}
                {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => {
                    return <li key = {user.id}>{user.name}</li>
                }) }
                </ul>
            </>
            }
        </section>
    )
}