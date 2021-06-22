import React from 'react';
const TextField = ({
    val, change, placeholder, height, error
}) => {
    return (
        <>
        <input placeholder={placeholder}
        value={val}
        onChange={change}
        style={{
            height: height,
            width: '20%',
            padding: 5,
            marginBottom:10
        }} /><br></br>
        {
            error &&
            <p style={{color: 'red'}}>
                {error}
            </p>
        }
        </>
    )
}
export default TextField;