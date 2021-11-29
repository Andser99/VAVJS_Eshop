import React, { useState } from "react";
import CartState from "./CartTracker";

function OrderForm(){
    const [email, setEmail] = useState("");
    const [meno, setMeno] = useState("");
    const [ulica, setUlica] = useState("");
    const [cislo, setCislo] = useState("");
    const [psc, setPsc] = useState("");
    const [mesto, setMesto] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        CartState.sendOrder(email, meno, ulica, cislo, psc, mesto);
    }

    return (
    <React.Fragment>
        <form onSubmit={onSubmit}>
        <table><tbody>
            <tr>
                <td>
                    <p>Email</p>
                </td>
                <td>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </td>
            </tr>    
            <tr>
                <td>
                    <p>Meno</p>
                </td>
                <td>
                    <input type="text" value={meno} onChange={(e) => setMeno(e.target.value)}></input>
                </td>
            </tr>    
            <tr>
                <td>
                    <p>Ulica</p>
                </td>
                <td>
                    <input type="text" value={ulica} onChange={(e) => setUlica(e.target.value)}></input>
                </td>
            </tr>    
            <tr>
                <td>
                    <p>Cislo</p>
                </td>
                <td>
                    <input type="text" value={cislo} onChange={(e) => setCislo(e.target.value)}></input>
                </td>
            </tr>    
            <tr>
                <td>
                    <p>PSC</p>
                </td>
                <td>
                    <input type="text" value={psc} onChange={(e) => setPsc(e.target.value)}></input>
                </td>
            </tr>    
            <tr>
                <td>
                    <p>Mesto</p>
                </td>
                <td>
                    <input type="text" value={mesto} onChange={(e) => setMesto(e.target.value)}></input>
                </td>
            </tr>    
        </tbody></table>
        <input type="submit" />
        </form>
    </React.Fragment>
    )
}

export default OrderForm;