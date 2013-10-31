
puremvc.define(
{
    name: 'model.QuestionHintsProxy',
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
        var insertSQL = "SELECT * FROM question_hints WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionhintsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_hints (questionid, hint, hintformat, shownumcorrect, clearwrong, options)' +
                        'VALUES (?,?,?,?,?,?)';
        var values = [questionhintsVO.questionid, questionhintsVO.hint, questionhintsVO.hintformat, questionhintsVO.shownumcorrect,
                      questionhintsVO.clearwrong, questionhintsVO.options];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionHintsProxy'
}
);