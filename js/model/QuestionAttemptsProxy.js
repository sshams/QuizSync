
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
        this.database = model.Moodle.getConnection();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_attempts WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
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
    },

    update: function (questionattemptVO, success, fail) {
        var insertSQL = 'UPDATE question_attempts SET questionusageid = ?, slot = ?, behaviour = ?, questionid = ?, variant = ?, maxmark = ?, minfraction = ?,' +
                                                     'flagged = ?, questionsummary = ?, rightanswer = ?, responsesummary = ?, timemodified = ?' +
                         'WHERE id = ?';
        var values = [questionattemptVO.questionusageid, questionattemptVO.slot, questionattemptVO.behaviour, questionattemptVO.questionid,
                      questionattemptVO.variant, questionattemptVO.maxmark, questionattemptVO.minfraction,
                      questionattemptVO.flagged, questionattemptVO.questionsummary, questionattemptVO.rightanswer,
                      questionattemptVO.responsesummary, questionattemptVO.timemodified,  questionattemptVO.id];

        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionAttemptsProxy'
}
);