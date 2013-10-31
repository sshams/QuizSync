
puremvc.define(
{
    name: 'model.QuizQuestionInstancesProxy',
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
        var insertSQL = "SELECT * FROM quiz_question_instances WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (quizquestioninstancesVO, success, fail) {
        var insertSQL = 'INSERT INTO quiz_question_instances (quiz, question, grade)' +
                        'VALUES (?,?,?,?)';
        var values = [quizquestioninstancesVO.quiz, quizquestioninstancesVO.question, quizquestioninstancesVO.grade];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuizQuestionInstancesProxy'
}
);