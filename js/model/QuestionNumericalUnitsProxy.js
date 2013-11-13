
puremvc.define(
{
    name: 'model.QuestionNumericalUnitsProxy',
    parent: puremvc.Proxy,

    constructor: function () {
        puremvc.Proxy.call(this, this.constructor.NAME, null);
    }
},
{
    database: null,

    onRegister: function (id, success, fail) {
        this.database = model.Moodle.getConnection();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_numerical_units WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionnumericalunitsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_numerical_units (question, multiplier, unit)' +
                        'VALUES (?,?,?)';
        var values = [questionnumericalunitsVO.question, questionnumericalunitsVO.multiplier, questionnumericalunitsVO.unit];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionNumericalUnitsProxy'
}
);