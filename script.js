document.getElementById('btn-gca').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_lpa\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-pmi').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_pmi\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-tfe').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_tfe\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-lza').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_lza\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-val').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_val\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-sdq').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql sd_produccion\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-pur').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_pr\nselect * from migracion.ver_bloqueos ;\n'));
document.getElementById('btn-cau').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_ca\nselect * from migracion.ver_bloqueos ;\n'));

document.getElementById('btn-generar').addEventListener('click', () => {
    const sentenciasDesbloqueo = [];

    function agregarSentencia(id, base) {
        const bloqueo = document.getElementById(id).value.trim();
        if (bloqueo !== '') {
            sentenciasDesbloqueo.push(`select pg_terminate_backend(${base}${bloqueo});`);
        }
    }

    agregarSentencia('input-01', '');
    agregarSentencia('input-02', '');
    agregarSentencia('input-03', '');
    agregarSentencia('input-04', '');
    agregarSentencia('input-05', '');
    agregarSentencia('input-06', '');
    agregarSentencia('input-07', '');
    agregarSentencia('input-08', '');
    agregarSentencia('input-09', '');
    agregarSentencia('input-10', '');
    agregarSentencia('input-11', '');
    agregarSentencia('input-12', '');

    if (sentenciasDesbloqueo.length > 0) {
        const sentenciasCombinadas = sentenciasDesbloqueo.join('\n') + '\n';
        copyToClipboard(sentenciasCombinadas);
        alert('Sentencias de desbloqueo generadas y copiadas al portapapeles.');

        // Vaciar los cuadros de texto después de copiar las sentencias
        const inputs = document.querySelectorAll('.query-inputs input');
        inputs.forEach(input => input.value = ''); // Establecer el valor a una cadena vacía
    } else {
        alert('No se ha ingresado ningún número en los cuadros de bloqueo.');
    }
});

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
