import React from "react"
import {
    Link

  } from "react-router-dom";

function About() {
    return (
        <>
        <h1>Data Perserta Sanbercode Bootcamp Reactjs</h1>
        <ul>
            <li><strong>Nama:</strong> Nisrina Alya Sudrajat</li>
            <li><strong>Email:</strong> sudrajat.nisrina@gmail.com</li>
            <li><strong>Operasi yang digunakan:</strong> Windows</li>
            <li><strong>Akun Github:</strong> nisrinasdr</li>
            <li><strong>Akun Telegram:</strong> nisrinasdr</li>
        </ul>
        <Link to="/">Kembali Ke Index</Link>
        </>
    );
}

export default About