function add( element_type ) {
  return document.createElementNS( 'http://www.w3.org/2000/svg', element_type );
}

function add_rect( target, canvas ) {
  var bb = target.getBBox();
  var rect = add( 'rect' );
  rect.setAttribute( 'x', bb.x );
  rect.setAttribute( 'y', bb.y );
  rect.setAttribute( 'height', bb.height );
  rect.setAttribute( 'width', bb.width );
  rect.setAttribute( 'stroke', 'black' );
  rect.setAttribute( 'stroke-width', 2 );
  rect.setAttribute( 'fill', 'none' );
  canvas.appendChild( rect );
}

function paint() {
  var schema = [ [ 2,  , , , , ],
                 [  , 3, , , , ] ];
  var note = document.getElementById( 'note' );
  var text = add( 'text' );
  text.setAttribute( 'x', 10 );
  text.setAttribute( 'y', 65 );
  text.setAttribute( 'font-size', 50 );
  //text.setAttribute( 'visibility', 'hidden' );
  text.innerHTML = 7;
  note.appendChild( text );
  var bb = text.getBBox();
  var h = bb.height;
  add_rect( text, note );

  var text = add( 'text' );
  text.setAttribute( 'x', 10 );
  text.setAttribute( 'y', 65 + h );
  text.setAttribute( 'font-size', 50 );
  text.innerHTML = 7;
  note.appendChild( text );
  add_rect( text, note );

  var text = add( 'text' );
  text.setAttribute( 'x', 10 );
  text.setAttribute( 'y', 65 + 2 * h );
  text.setAttribute( 'font-size', 50 );
  text.innerHTML = 8;
  note.appendChild( text );
  add_rect( text, note );

  console.log( bb );
}

document.addEventListener( 'DOMContentLoaded', paint );