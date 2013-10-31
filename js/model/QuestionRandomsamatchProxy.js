
puremvc.define(
{
    name: 'model.QuestionRandomsamatchProxy',
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

    insert: function (questionrandomsamatchVO, success, fail) {
        var insertSQL = 'INSERT INTO question (question, choose)' +
                        'VALUES (?,?)';
        var values = [questionrandomsamatchVO.question, questionrandomsamatchVO.choose];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionRandomsamatchProxy'
}
);