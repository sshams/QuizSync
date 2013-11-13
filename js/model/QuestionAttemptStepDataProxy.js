
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
        this.database = model.Moodle.getConnection();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_attempt_step_data WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionAttemptStepDataVO, success, fail) {
        var insertSQL = 'INSERT INTO question_attempt_step_data (attemptstepid, name, value)' +
                        'VALUES (?,?,?)';
        var values = [questionAttemptStepDataVO.attemptstepid, questionAttemptStepDataVO.name, questionAttemptStepDataVO.value];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    },

    update: function (questionAttemptStepDataVO, success, fail) {
        var insertSQL = 'UPDATE  question_attempt_step_data SET attemptstepid = ?, name = ?, value = ?' +
                        'WHERE id = ?';
        var values = [questionAttemptStepDataVO.attemptstepid, questionAttemptStepDataVO.name, questionAttemptStepDataVO.value, questionAttemptStepDataVO.id];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionAttemptStepDataProxy'
}
);