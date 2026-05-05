import { useState } from 'react'
import './Listagem.css'

export default  function Listagem() {

    return (
        <>
        <main>
       <h1> Tabela de Listagem</h1> 

       <table border="1">
        <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Senha</td>
            <td>Editar</td>
            <td>Excluir</td>
        </tr>

        <tr>
            <td>Ellen </td>
            <td>ellen321@gmail.com</td>
            <td>762535563</td>
            <td>📝</td>
            <td>🗑️</td>

        </tr>

        <tr>
            <td>Laura</td>
            <td>laurabri@gmail.com</td>
            <td>8394632</td>
            <td>📝</td>
            <td>🗑️</td>

        </tr>

        <tr>
            <td>Thalita</td>
            <td>thalitathatinha@gmail.com</td>
            <td>72737884</td>
            <td>📝</td>
            <td>🗑️</td>

        </tr>

        <tr>
            <td>Rafael</td>
            <td>rafaelbal@gmail.com</td>
            <td>83867464</td>
            <td>📝</td>
            <td>🗑️</td>

        </tr>

       </table>
    </main>
        </>
    )
}