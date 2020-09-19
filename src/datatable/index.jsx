import React from "react";

export default function Datatable({ data }) {
    var tableStyle = {
        "border-collapse": "collapse",
        "padding": "5px",
        "margin": "10px",
        "border": "1px solid black"
     };
    return <table cellPadding={1} cellSpacing={1} style={tableStyle}>
        <thead style={tableStyle}>
            <tr> 
            <th>UserName</th>
            </tr>
        </thead>
        <tbody style={tableStyle}>
            <tr>No One</tr>
        </tbody>
    </table>
}