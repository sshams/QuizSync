
puremvc.define(
{
    name: 'model.QuestionUsagesProxy',
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
        var insertSQL = "SELECT * FROM question_usages WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questionusagesVO, success, fail) {
        var insertSQL = 'INSERT INTO question_usages (contextid, component, preferredbehaviour)' +
                        'VALUES (?,?,?)';
        var values = [questionusagesVO.contextid, questionusagesVO.component, questionusagesVO.preferredbehaviour];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionUsagesProxy'
}
);