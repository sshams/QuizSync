
puremvc.define(
{
    name: 'model.QuestionSessionsProxy',
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
        var insertSQL = "SELECT * FROM question_sessions WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionsessionsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_sessions (attemptid, questionid, newest, newgraded, sumpenalty, manualcomment, manualcommentformat, flagged)' +
                        'VALUES (?,?,?,?,?,?,?,?)';
        var values = [questionsessionsVO.attemptid, questionsessionsVO.questionid, questionsessionsVO.newest, questionsessionsVO.newgraded,
                      questionsessionsVO.sumpenalty, questionsessionsVO.manualcomment, questionsessionsVO.manualcommentformat, questionsessionsVO.flagged];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionSessionsProxy'
}
);