import React from "react";

export default function Datatable({ data }) {
    const tableStyle = {
        "width": "80%",
        "border-collapse": "collapse",
        "border": "1px solid black"
     };
    
    const columns = data[0] && Object.keys(data[0]);

    return <table cellPadding={1} cellSpacing={1} style={tableStyle}>
        <thead style={tableStyle}>
            <tr> 
            {data[0] && columns.map((heading) => 
            <th>{heading}</th>
            )}
            </tr>
        </thead>
        <tbody style={tableStyle}>
            {data.map(row => 
            <tr>
                {
                    columns.map(column => <td>{row[column]}</td>)
                }
            </tr>)

            }
        </tbody>
    </table>
}