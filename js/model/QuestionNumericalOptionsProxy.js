
puremvc.define(
{
    name: 'model.QuestionNumericalOptionsProxy',
    parent: puremvc.Proxy,

    constructor: function () {
        puremvc.Proxy.call(this, this.constructor.NAME, null);
    }
},
{
    database: null,

    onRegister: function (id, success, fail) {
        this.database = model.Moodle.getMoodle();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_numerical_options WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionnumericaloptionsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_numerical_options (question, showunits, unitsleft, unitgradingtype, unitpenalty)' +
                        'VALUES (?,?,?,?,?)';
        var values = [questionnumericaloptionsVO.question, questionnumericaloptionsVO.showunits, questionnumericaloptionsVO.unitsleft, questionnumericaloptionsVO.unitgradingtype, questionnumericaloptionsVO.unitpenalty];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionNumericalOptionsProxy'
}
);