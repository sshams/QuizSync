
puremvc.define(
{
    name: 'model.QuestionMultichoiceProxy',
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
        var insertSQL = "SELECT * FROM question_multichoice WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionmultichoiceVO, success, fail) {
        var insertSQL = 'INSERT INTO question_multichoice (question, layout, answers, single, shuffleanswers, correctfeedback,' +
                                                          'correctfeedbackformat, partiallycorrectfeedback, partiallycorrectfeedbackformat,' +
                                                          'incorrectfeedback, incorrectfeedbackformat, answernumbering, shownumcorrect)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [questionmultichoiceVO.question, questionmultichoiceVO.layout, questionmultichoiceVO.answers, questionmultichoiceVO.single, questionmultichoiceVO.shuffleanswers, questionmultichoiceVO.correctfeedback,
                      questionmultichoiceVO.correctfeedbackformat, questionmultichoiceVO.partiallycorrectfeedback, questionmultichoiceVO.partiallycorrectfeedbackformat,
                      questionmultichoiceVO.incorrectfeedback, questionmultichoiceVO.incorrectfeedbackformat, questionmultichoiceVO.answernumbering, questionmultichoiceVO.shownumcorrect];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionMultichoiceProxy'
}
);