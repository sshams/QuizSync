
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
        this.database = model.Moodle.getConnection();
        this.facade.registerProxy(new model.QuestionAnswersProxy());
        this.questionVO;
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionVO) {
        this.questionVO = questionVO;
        this.insertSQL = 'INSERT INTO question (category, parent, name, questiontext, questiontextformat, generalfeedback,' +
                                              'generalfeedbackformat, defaultmark, penalty, qtype, length, stamp, version,' +
                                              'hidden, timecreated, timemodified, createdby, modifiedby)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        this.values = [questionVO.category, questionVO.parent, questionVO.name, questionVO.questiontext, questionVO.questiontextformat, questionVO.generalfeedback,
                      questionVO.generalfeedbackformat, questionVO.defaultmark, questionVO.penalty, questionVO.qtype, questionVO.length, questionVO.stamp, questionVO.version,
                      questionVO.hidden, questionVO.timecreated, questionVO.timemodified, questionVO.createdby, questionVO.modifiedby];
        this.database.transaction(Delegate.create(this, this.insertTransaction));
    },

    insertTransaction: function(t) {
        t.executeSql(this.insertSQL, this.values, Delegate.create(this, this.insertSuccess), Delegate.create(this, this.insertFail));
    },    

    insertSuccess: function(questionAnswersVOs){
        var questionAnswersProxy = this.facade.retrieveProxy(model.QuestionAnswersProxy.NAME);        
        for(i in this.questionVO.questionAnswersVOs){
            questionAnswersProxy.insert(this.questionVO.questionAnswersVOs[i]);
      };
    },

    insertFail: function(){
        console.log('error adding questionVO');
    }   
},
{
    NAME: 'QuestionProxy'
}
);