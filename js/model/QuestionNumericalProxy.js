
puremvc.define(
{
    name: 'model.QuestionNumericalProxy',
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
        var insertSQL = "SELECT * FROM question_numerical WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionnumericalVO, success, fail) {
        var insertSQL = 'INSERT INTO question_numerical (question, answer, tolerance)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [questionnumericalVO.question, questionnumericalVO.answer, questionnumericalVO.tolerance];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionNumericalProxy'
}
);