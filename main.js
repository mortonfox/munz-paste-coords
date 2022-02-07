// jshint strict: true, esversion: 8

function init() {
  'use strict';

  function setupElems() {
    let btn = document.createElement('button');
    btn.name = btn.id = 'paste_coords';
    btn.style.cssText = 'background-color: #E82A24; color: #fff; font-weight: 700; border: none; padding: 6px 10px; cursor: pointer; margin: 0; display: block';
    btn.appendChild(document.createTextNode('Paste Coords'));

    let status_mesg = document.createElement('div');
    status_mesg.name = status_mesg.id = 'paste_coords_status_mesg';
    status_mesg.style.display = 'none';

    let fragment = new DocumentFragment();
    fragment.appendChild(btn);
    fragment.appendChild(status_mesg);

    let mainarea = document.getElementsByClassName('munzee-main-area');
    mainarea[0].appendChild(fragment);
  }

  setupElems();
}

init();

// -- The End --
