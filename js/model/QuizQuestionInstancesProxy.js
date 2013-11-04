
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
        this.facade.registerProxy(new model.QuestionProxy());
        this.quizquestioninstancesVO;
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM quiz_question_instances WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (quizquestioninstancesVO) {
        this.quizquestioninstancesVO = quizquestioninstancesVO;        
        this.insertSQL = 'INSERT INTO quiz_question_instances (quiz, question, grade)' +
                        'VALUES (?,?,?)';
        this.values = [quizquestioninstancesVO.quiz, quizquestioninstancesVO.question, quizquestioninstancesVO.grade];
        this.database.transaction(Delegate.create(this, this.insertTransaction));
    },

    insertTransaction: function(t) {
      t.executeSql(this.insertSQL, this.values, Delegate.create(this, this.insertSuccess), Delegate.create(this, this.insertFail));
    },    

    insertSuccess: function(questionVO){
      var questionProxy = this.facade.retrieveProxy(model.QuestionProxy.NAME); 
      questionProxy.insert(this.quizquestioninstancesVO.questionVO); 
    },

    insertFail: function(){
        console.log('error adding quizquestioninstancesVO');
    } 
},
{
    NAME: 'QuizQuestionInstancesProxy'
}
);