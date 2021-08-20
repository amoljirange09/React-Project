import React, { useState } from 'react'
import Select from 'react-select'

function Bgcolor()
{
    var colors = [
        {
            value:1,
            label:"pure black"
        },
        {
            value:2,
            label:"pure white"
        },
        {
            value:3,
            label:"pure black-50% transparency"
        },
        {
            value:4,
            label:"dark grey"
        },
        {
            value:5,
            label:"grey"
        },
        {
            value:6,
            label:"light background grey"
        },
    ];

    var [setbgcolor,ddlvalue]=useState(colors.label);
    var ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
    return(
        <div>
            <style>{'body {background-color:'+setbgcolor+';}'}</style>
            <Select options={colors} onChange={ddlhandle}></Select>
            <center>
                <b>The background color is : {setbgcolor}</b>
            </center>
        </div>
    );
}
export default Bgcolor;