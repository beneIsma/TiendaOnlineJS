

function mostrarModal(id) {
    const bs = new bootstrap.Modal(document.getElementById(`${id}`))
    bs.show();
}

function cerrarModal(id) {
    const bs = bootstrap.Modal.getInstance(document.getElementById(`${id}`));
    bs.hide();
}