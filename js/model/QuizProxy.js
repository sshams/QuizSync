
puremvc.define(
{
    name: 'model.QuizProxy',
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
        var insertSQL = "SELECT * FROM quiz WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (quizVO, success, fail) {
        var insertSQL = 'INSERT INTO quiz (course, name, intro, timeopen, timeclose, timelimit, overduehandling, graceperiod, ' +
                                          'preferredbehaviour, attempts, attemptonlast, grademethod, decimalpoints, questiondecimalpoints, ' +
                                          'reviewattempt, reviewcorrectness, reviewmarks, reviewspecificfeedback, reviewgeneralfeedback, ' +
                                          'reviewrightanswer, reviewoverallfeedback, questionsperpage, navmethod, shufflequestions, ' +
                                          'shuffleanswers, questions, sumgrades, grade, timecreated, timemodified, password, subnet, ' +
                                          'browsersecurity, delay1, delay2, showuserpicture, showblocks)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [quizVO.course, quizVO.name, quizVO.intro, quizVO.timeopen, quizVO.timeclose, quizVO.timelimit, quizVO.overduehandling, quizVO.graceperiod,
                      quizVO.preferredbehaviour, quizVO.attempts, quizVO.attemptonlast, quizVO.grademethod, quizVO.decimalpoints, quizVO.questiondecimalpoints,
                      quizVO.reviewattempt, quizVO.reviewcorrectness, quizVO.reviewmarks, quizVO.reviewspecificfeedback, quizVO.reviewgeneralfeedback,
                      quizVO.reviewrightanswer, quizVO.reviewoverallfeedback, quizVO.questionsperpage, quizVO.navmethod, quizVO.shufflequestions,
                      quizVO.shuffleanswers, quizVO.questions, quizVO.sumgrades, quizVO.grade, quizVO.timecreated, quizVO.timemodified, quizVO.password, quizVO.subnet,
                      quizVO.browsersecurity, quizVO.delay1, quizVO.delay2, quizVO.showuserpicture, quizVO.showblocks];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuizProxy'
}
);