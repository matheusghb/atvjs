let lista = []

document.getElementById('ad').addEventListener('click', function() {

    document.getElementById('fu').innerHTML = ''

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
    }

    document.getElementById('fu').appendChild(ti);
    document.getElementById('fu').appendChild(au);
    document.getElementById('fu').appendChild(an);
    document.getElementById('fu').appendChild(ge);
    document.getElementById('fu').appendChild(co);
});

document.getElementById('ex').addEventListener('click', function(){

    document.getElementById('fu').innerHTML = ''

    const ser = document.createElement('input');
    ser.type = 'text';
    ser.name = 'fname';
    ser.placeholder = 'Nome de livro:';
    ser.id = 'ser'

    const edi = document.createElement('h1');
    edi.id = 'edi'
    edi.innerText = 'Digite o livro que deseja excluir.'

    const con = document.createElement('button');
    con.type = 'button';
    con.id = 'con'
    con.textContent = 'Confirmar'
    con.onclick = function() {
        const inf = document.getElementById('ser').value
        if (lista.includes(inf)) {
            num = lista.indexOf(inf)
            lista.splice(num, 4)
            console.log(num,num+4)
            document.getElementById('edi').innerText = 'Livro foi excluído da tabela.'
        }
        else {
            document.getElementById('edi').innerText = 'Livro não foi encontrado.'
        }
    }

    document.getElementById('fu').appendChild(ser)
    document.getElementById('fu').appendChild(edi)
    document.getElementById('fu').appendChild(con)
});

document.getElementById('li').addEventListener('click', function(){

    document.getElementById('fu').innerHTML = ''

    const grid = document.createElement('div');
    grid.className='grid';
    grid.id = 'grid'
    document.getElementById('fu').appendChild(grid); 
    let i, len, text;
    for (let i = 0, len = lista.length, text = ''; i < len; i++) {
        let g = document.createElement('div');
        g.className = 'g'+lista[i];
        g.textContent = lista[i];
        document.getElementById('grid').appendChild(g);
    }
})