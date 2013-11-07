
puremvc.define(
{
    name: 'model.QuestionStatesProxy',
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
        var insertSQL = "SELECT * FROM question_states WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionstatesVO, success, fail) {
        var insertSQL = 'INSERT INTO question_states (attempt, question, seq_number, answer, timestamp, event, grade, raw_grade, penalty)' +
                        'VALUES (?,?,?,?,?,?,?,?,?)';
        var values = [questionstatesVO.attempt, questionstatesVO.question, questionstatesVO.seq_number, questionstatesVO.answer,
                      questionstatesVO.timestamp, questionstatesVO.event, questionstatesVO.grade, questionstatesVO.raw_grade,
                      questionstatesVO.penalty];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionStatesProxy'
}
);