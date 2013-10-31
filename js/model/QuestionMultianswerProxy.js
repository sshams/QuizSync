
puremvc.define(
{
    name: 'model.QuestionMultianswerProxy',
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
        var insertSQL = "SELECT * FROM question_multianswer WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionmultianswerVO, success, fail) {
        var insertSQL = 'INSERT INTO question_multianswer (question, sequence)' +
                        'VALUES (?,?)';
        var values = [questionmultianswerVO.question, questionmultianswerVO.sequence];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionMultianswerProxy'
}
);