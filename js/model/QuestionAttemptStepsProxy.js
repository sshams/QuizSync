
puremvc.define(
{
    name: 'model.QuestionAttemptStepsProxy',
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
        var insertSQL = "SELECT * FROM question_attempt_steps WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionattemptstepVO, success, fail) {
        var insertSQL = 'INSERT INTO question_attempt_steps (questionattemptid, sequencenumber, state, fraction, timecreated, userid)' +
                        'VALUES (?,?,?,?,?,?)';
        var values = [questionattemptstepVO.questionattemptid, questionattemptstepVO.sequencenumber, questionattemptstepVO.state,
                      questionattemptstepVO.fraction, questionattemptstepVO.timecreated, questionattemptstepVO.userid];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionAttemptStepsProxy'
}
);