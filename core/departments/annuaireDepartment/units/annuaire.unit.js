"use strict";
exports.__esModule = true;
exports.Annuaire = void 0;
var Annuaire = /** @class */ (function () {
    function Annuaire(id, name, proprietaireId, proprietaireName, source, urlToken, nameColumns, columnsToCrypt, columnsToCheck) {
        this.id = id;
        this.name = name;
        this.proprietaireId = proprietaireId;
        this.proprietaireName = proprietaireName;
        this.source = source;
        this.urlToken = urlToken;
        this.nameColumns = nameColumns;
        this.columnsToCrypt = columnsToCrypt;
        this.columnsToCheck = columnsToCheck;
        this.accessArray = [];
    }
    Annuaire.newAnnuaire = function () {
        return new Annuaire(null, null, null, null, null, null, null, null, null);
    };
    Annuaire.prototype.setId = function (id) {
        this.id = id;
    };
    Annuaire.prototype.getId = function () {
        return this.id;
    };
    Annuaire.prototype.setName = function (name) {
        this.name = name;
    };
    Annuaire.prototype.getName = function () {
        return this.name;
    };
    Annuaire.prototype.setProprietaireId = function (proprietaireId) {
        this.proprietaireId = proprietaireId;
    };
    Annuaire.prototype.getProprietaireId = function () {
        return this.proprietaireId;
    };
    Annuaire.prototype.setProprietaireName = function (proprietaireName) {
        this.proprietaireName = proprietaireName;
    };
    Annuaire.prototype.getProprietaireName = function () {
        return this.proprietaireName;
    };
    Annuaire.prototype.setSource = function (source) {
        this.source = source;
    };
    Annuaire.prototype.getSource = function () {
        return this.source;
    };
    Annuaire.prototype.setUrlToken = function (urlToken) {
        this.urlToken = urlToken;
    };
    Annuaire.prototype.getUrlToken = function () {
        return this.urlToken;
    };
    Annuaire.prototype.setNameColumns = function (nameColumns) {
        this.nameColumns = nameColumns;
    };
    Annuaire.prototype.getNameColumns = function () {
        return this.nameColumns;
    };
    Annuaire.prototype.setColumnsToCrypt = function (columnsToCrypt) {
        this.columnsToCrypt = columnsToCrypt;
    };
    Annuaire.prototype.getColumnsToCrypt = function () {
        return this.columnsToCrypt;
    };
    Annuaire.prototype.setColumnsToCheck = function (columnsToCheck) {
        this.columnsToCheck = columnsToCheck;
    };
    Annuaire.prototype.getColumnsToCheck = function () {
        return this.columnsToCheck;
    };
    Annuaire.prototype.setAccessArray = function (accessArray) {
        this.accessArray = accessArray;
    };
    Annuaire.prototype.getAccessArray = function () {
        return this.accessArray;
    };
    return Annuaire;
}());
exports.Annuaire = Annuaire;
