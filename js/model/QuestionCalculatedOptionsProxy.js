
puremvc.define(
{
    name: 'model.QuestionCalculatedOptionsProxy',
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
        var insertSQL = "SELECT * FROM question_calculated_options WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questioncalculatedoptionsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_calculated_options (question, synchronize, single, shuffleanswers, correctfeedback,' +
                                                                  'correctfeedbackformat, partiallycorrectfeedback, partiallycorrectfeedbackformat,'+
                                                                  'incorrectfeedback, incorrectfeedbackformat, answernumbering, shownumcorrect )' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [questioncalculatedoptionsVO.question, questioncalculatedoptionsVO.synchronize, questioncalculatedoptionsVO.single, questioncalculatedoptionsVO.shuffleanswers, questioncalculatedoptionsVO.correctfeedback,
                      questioncalculatedoptionsVO.correctfeedbackformat, questioncalculatedoptionsVO.partiallycorrectfeedback, questioncalculatedoptionsVO.partiallycorrectfeedbackformat,
                      questioncalculatedoptionsVO.incorrectfeedback, questioncalculatedoptionsVO.incorrectfeedbackformat, questioncalculatedoptionsVO.answernumbering, questioncalculatedoptionsVO.shownumcorrect];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionCalculatedOptionsProxy'
}
);