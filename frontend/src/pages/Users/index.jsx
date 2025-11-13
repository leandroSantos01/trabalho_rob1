import { useEffect,useState } from "react"
import './index.scss'
import { Link, useNavigate } from "react-router"
import api from '../../../api.js'

export default function Users(){
    const navigate = useNavigate()
    const [users, setUsers] = useState([])



    async function fetchUsers(){
        try {
            
            
        } catch (error) {
            
        }
    }




    return(
        <div>
            <div className="users-page">
                <h1>Users Page</h1>
            </div>
        </div>
    )
}