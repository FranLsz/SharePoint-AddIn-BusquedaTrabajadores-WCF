'use strict';

function GetPersonas() {
    var nom = $("#txtNombre").val();
    $("#resultado").empty();
    var uri = _spPageContextInfo.webAbsoluteUrl +
        "/_api/lists/getByTitle('Trabajador')/items?$filter=Nombre eq '" +
        nom +
        "'";

    $.ajax({
        type: "GET",
        url: uri,
        contentType: "application/json",
        headers: {
            "accept": "application/json;odata=verbose"
        },
        success: onGetResults,
        error: onError
    });

    function onError(r) {

    }
    function onGetResults(xhr) {
        var odata = xhr.d.results;
        var res = "<table><thead><th>Nombre</th><th></th>Apellidos</th>" +
            "<th>Edad</th><th>Salario</th><th>Alta</th></thead>";

        $.each(odata,
            function (i, item) {
                res += "<tr>";
                res += "<td>" + item.Nombre + "<td>";
                res += "<td>" + item.Apellidos + "<td>";
                res += "<td>" + item.Edad + "<td>";
                res += "<td>" + item.Salario + "<td>";
                res += "<td>" + item.Alta + "<td>";
                res += "</tr>";
            });

        res += "</table>";

        $("#resultado").html(res);
    }
}

$(document)
    .ready(function () {
        $("#btnOk").on("click", GetPersonas);
    });
