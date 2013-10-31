
puremvc.define(
{
    name: 'model.QuestionDatasetItemsProxy',
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
        var insertSQL = "SELECT * FROM question_dataset_items WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questiondatasetitemsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_dataset_items (definition, itemnumber, value)' +
                        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        var values = [questiondatasetitemsVO.definition, questiondatasetitemsVO.itemnumber, questiondatasetitemsVO.value];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionDatasetItemsProxy'
}
);