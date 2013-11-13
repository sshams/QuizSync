
puremvc.define(
{
    name: 'model.QuestionCalculatedProxy',
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
        var insertSQL = "SELECT * FROM question_calculated WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questioncalculatedVO, success, fail) {
        var insertSQL = 'INSERT INTO question_calculated (question, answer, tolerance, tolerancetype, correctanswerlength, correctanswerformat)' +
                        'VALUES (?,?,?,?,?,?)';
        var values = [questioncalculatedVO.question, questioncalculatedVO.answer, questioncalculatedVO.tolerance,
                      questioncalculatedVO.tolerancetype, questioncalculatedVO.correctanswerlength,
                      questioncalculatedVO.correctanswerformat];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionCalculatedProxy'
}
);