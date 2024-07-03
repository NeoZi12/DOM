'use strict'

function addClass()
{
    const text = document.getElementById('text');
    let value = document.getElementById('classInput').value;

    text.classList.add(value);
}

function ToggleVisibility1()
{
    const elem = document.getElementById('text1');
   
    elem.classList.toggle('hidden');
}

function ToggleVisibility2()
{
    const elem = document.getElementById('text2');
   
    elem.classList.toggle('hidden');
}

function ToggleVisibility3()
{
    const elem = document.getElementById('text3');
   
    elem.classList.toggle('hidden');
}

function clicked()
{
    const btn = document.getElementById('btn');

    btn.classList.add('clicked');
    btn.textContent = 'Clicked!'
    
}
