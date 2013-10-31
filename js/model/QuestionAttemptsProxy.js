
puremvc.define(
{
    name: 'model.QuestionAttemptsProxy',
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
        var insertSQL = "SELECT * FROM question_attempts WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionattemptVO, success, fail) {
        var insertSQL = 'INSERT INTO question_attempts (questionusageid, slot, behaviour, questionid, variant, maxmark, minfraction,' +
                                                       'flagged, questionsummary, rightanswer, responsesummary, timemodified)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [questionattemptVO.questionusageid, questionattemptVO.slot, questionattemptVO.behaviour, questionattemptVO.questionid,
                      questionattemptVO.variant, questionattemptVO.maxmark, questionattemptVO.minfraction,
                      questionattemptVO.flagged, questionattemptVO.questionsummary, questionattemptVO.rightanswer,
                      questionattemptVO.responsesummary, questionattemptVO.timemodified];

        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionAttemptsProxy'
}
);