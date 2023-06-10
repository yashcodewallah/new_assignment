import React from 'react'
import styled from 'styled-components'
import "./tableCon.css"
function TableCon() {

const singleObject={
  longBuildup:"longBuildup",
  IV:"9.4",
  OI:"35K",
  volume:"1.25K",
  posChange:"123.5",
  LTP:"1,245.3",
  strike:17700,
  LTP:"1,245.3",
  negChange:"123.5",
  volume:"1.25K",
  OI:"35K",
  IV:"9.4",
  OIBuildup :"Long Buildup"
}
  const newArray = Array.from({ length: 30 }, () => ({ ...singleObject }));
  return (
    <Table>
      <div className='callPut'>
        <div>CALLS</div>
        <div>PUTS</div>
      </div>
<table>
      <thead className='tableHead'>
        <tr>
          <Column>OI Buildup</Column>
          <Column>IV</Column>
          <Column>OI</Column>
          <Column>Volume</Column>
          <Column>change%</Column>
          <Column>LTP</Column>
          <Column className='strikeCol'>Strike</Column>
          <Column>LTP</Column>
          <Column>change%</Column>
          <Column>Volume</Column>
          <Column>OI</Column>
          <Column>IV</Column>
          <Column>OI Buildup</Column>
        </tr>
      </thead>
      <tbody>
        {newArray.map((objt)=>{
          return (<tr>
          <td>{objt.longBuildup}</td>
          <td>{objt.IV}</td>
          <td>{objt.OI}</td>
          <td>{objt.volume}</td>
          <td className='positiveChange'>{objt.posChange}</td>
          <td className='ltpRow'>{objt.LTP} 
            <p>B</p>
            <p>S</p>
          </td>
          <td className="strikeCol">{objt.strike}</td>
          <td>{objt.LTP}</td>
          <td className='negativeChange'>{objt.negChange}</td>
          <td>{objt.volume}</td>
          <td>{objt.OI}</td>
          <td>{objt.IV}</td>
          <td>{objt.OIBuildup}</td>
        </tr>)
        })}

      </tbody>
    </table>
    </Table>
  )
}

const Table=styled.div`
width:85%;
font-family:"poppins";
margin:auto;
margin-top:30px;
border-collapse: collapse;
table{
  background:white;
  width:100%;
  tbody > tr > td{
    padding:10px;
  }
}
`
const Column=styled.th`
background:#E8EFFB;
height:40px;
padding:0px 10px;
font-size:15px;
letter-spacing:1px;
border:1px solid #E3D3FC;
border-right:none;
font-weight:400;
`
const ChangeCol=styled.td`
color:#4FBD75;

`

export default TableCon;