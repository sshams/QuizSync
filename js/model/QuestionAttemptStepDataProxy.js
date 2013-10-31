
puremvc.define(
{
    name: 'model.QuestionAttemptStepDataProxy',
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
        var insertSQL = "SELECT * FROM question_attempt_step_data WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionAttemptStepDataVO, success, fail) {
        var insertSQL = 'INSERT INTO question_attempt_step_data (attemptstepid, name, value)' +
                        'VALUES (?,?,?)';
        var values = [questionAttemptStepDataVO.attemptstepid, questionAttemptStepDataVO.name, questionAttemptStepDataVO.value];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionAttemptStepDataProxy'
}
);