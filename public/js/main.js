function deleteProject(id) {

    var x = 1;

    $.ajax({
        url: '/admin/projects/delete/' + id,
        type: 'DELETE',
        success: function () {
            location.reload();
        }
    });

}

function deleteCategory(id) {

    var x = 1;

    $.ajax({
        url: '/admin/categories/delete/' + id,
        type: 'DELETE',
        success: function () {
            location.reload();
        }
    });

}
