
puremvc.define(
{
    name: 'model.QuestionProxy',
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
        var insertSQL = "SELECT * FROM question WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questionVO, success, fail) {
        var insertSQL = 'INSERT INTO question (category, parent, name, questiontext, questiontextformat, generalfeedback,' +
                                              'generalfeedbackformat, defaultmark, penalty, qtype, length, stamp, version,' +
                                              'hidden, timecreated, timemodified, createdby, modifiedby)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [questionVO.category, questionVO.parent, questionVO.name, questionVO.questiontext, questionVO.questiontextformat, questionVO.generalfeedback,
                      questionVO.generalfeedbackformat, questionVO.defaultmark, questionVO.penalty, questionVO.qtype, questionVO.length, questionVO.stamp, questionVO.version,
                      questionVO.hidden, questionVO.timecreated, questionVO.timemodified, questionVO.createdby, questionVO.modifiedby];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionProxy'
}
);