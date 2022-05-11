<template>
    <div id="nameContainer">
        <h1 id="name">Samuel Ngwarai</h1>
    </div>

</template>

<style>
@import '../assets/css/main.css';

:root {
    --bluegrey: #A8B5B5;
    --skyblue: #a8d0d9;
    --darkblue: #2E3956;
    --red: #E1464B;
    --grey: #E2E3DD;
    --black: #1f262f;
    --white: #f7f8fa;
    --mono: "Roboto", monospace;
    --sans: 'MPlusRounded', sans-serif;
}

#nameContainer {
    display: grid;
    /* place-content: center; */
    place-items: center;
    height: 100vh;
    background-color: var(--skyblue);
}

#name {
    font-size: 6rem;
    margin: 0px 0px;
    font-family: 'MPlusRounded';
    color: var(--black)
}

@media only screen and (max-width: 900px) {
    body {
        background-color: lightblue;
    }

    #name {
        font-size: 4rem;
    }
}

</style>