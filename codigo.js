let lista = []

document.getElementById('ad').addEventListener('click', function() {
    const ti = document.createElement('input');
    ti.type = 'text';
    ti.name = 'fname';
    ti.placeholder = 'Título:';
    ti.id = "ti";

    const au = document.createElement('input');
    au.type = 'text';
    au.name = 'fname';
    au.placeholder = 'Autor:';
    au.id = 'au';

    const an = document.createElement('input');
    an.type = 'number';
    an.name = 'fname';
    an.placeholder = 'Ano:';
    an.id = 'an';

    const ge = document.createElement('input');
    ge.type = 'text';
    ge.name = 'fname';
    ge.placeholder = 'Gênero: ';
    ge.id = 'ge'

    const co = document.createElement('button');
    co.type = 'button';
    co.id = 'co'
    co.textContent = 'Confirmar';
    co.onclick = function() {
        let tii = document.getElementById('ti').value;
        let aui = document.getElementById('au').value
        let ani = document.getElementById('an').value
        let gei = document.getElementById('ge').value
        lista.push(tii, aui, ani, gei)
        document.getElementById('ti').value = '';
        document.getElementById('au').value = '';
        document.getElementById('an').value = '';
        document.getElementById('ge').value = '';
        console.log(lista)
    }

    document.getElementById('fu').appendChild(ti);
    document.getElementById('fu').appendChild(au);
    document.getElementById('fu').appendChild(an);
    document.getElementById('fu').appendChild(ge);
    document.getElementById('fu').appendChild(co);
});

'<div class="grid">'
    '<div class="g">Homestuck</div>'
    '<div class="g">Pitoca Grossa</div>'
    '<div class="g">2009</div>'
    '<div class="g">Sci-fi</div>'

'<input type="text" name="fname" placeholder="Título:" id="ti">'
'<input type="text" name="fname" placeholder="Autor:" id="au">'
'<input type="text" name="fname" placeholder="Ano de Publicação:" id="an">'
'<input type="text" name="fname" placeholder="Gênero" id="ge">'
'<button type="button" id="co">Confirmar</button>'