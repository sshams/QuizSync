
puremvc.define(
{
    name: 'model.QuestionAnswersProxy',
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
        var insertSQL = "SELECT * FROM question_answers WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionAnswersVO) {
        var insertSQL = 'INSERT INTO question_answers (question, answer, answerformat, fraction, feedback, feedbackformat)' +
                        'VALUES (?,?,?,?,?,?)';
        var values = [questionAnswersVO.question, questionAnswersVO.answer, questionAnswersVO.answerformat, questionAnswersVO.fraction,
                      questionAnswersVO.feedback, questionAnswersVO.feedbackformat];
        this.database.transaction(Delegate.create(this, this.insertTransaction));
    },

    insertTransaction: function(t) {
      t.executeSql(this.insertSQL, this.values, Delegate.create(this, this.insertSuccess), Delegate.create(this, this.insertFail));
    },    

    insertSuccess: function(){
        console.log('insert success');
    },

    insertFail: function(){
        console.log('error adding questionAnswersVO');
    },

    update: function (questionAnswersVO, success, fail) {
        var insertSQL = 'UPDATE question_answers SET question = ?, answer = ?, answerformat = ?, fraction = ?, feedback = ?, feedbackformat = ?' +
                        'WHERE id = ?';
        var values = [questionAnswersVO.question, questionAnswersVO.answer, questionAnswersVO.answerformat, questionAnswersVO.fraction,
                      questionAnswersVO.feedback, questionAnswersVO.feedbackformat, questionAnswersVO.id];
        t.executeSql(this.insertSQL, this.values, success, fail);
    }

},
{
    NAME: 'QuestionAnswersProxy'
}
);