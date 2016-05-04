'use strict';

function GetPersonas() {
    var nom = $("#").val();
    $("#resultado").empty();
    var uri = _spPageContextInfo.webAbsoluteUrl +
        "_api/lists/getByTitle('Trabajador')/items?$filter=nombre eq '" +
        nom +
        "'";
}