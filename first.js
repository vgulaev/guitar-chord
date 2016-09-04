function paint() {
  var schema = [[2,,,,,],];
  var note = document.getElementById( 'note' );
  var text = document.createElementNS( 'http://www.w3.org/2000/svg', 'text' );
  text.setAttribute( 'x', 10 );
  text.setAttribute( 'y', 65 );
  text.setAttribute( 'font-size', 55 );
  text.innerHTML = 7;
  note.appendChild( text );
  var bb = text.getBBox();
  console.log( bb );
}

document.addEventListener( 'DOMContentLoaded', paint );